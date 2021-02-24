---
id: lifting-state
title: Lifting States in React
sidebar_label: Lifting States
---

import EditedBy from '../../../src/components/EditedBy'

## Introduction to Lifting States in React

Often, several components need to reflect the same changing data. In such cases, it is recommended to “Lift” the shared state up to their closest common ancestor, rather than keeping track of the data individually in their respective states. The data is then passed as props to the child components. This is called “lifting state up”. (ie removing the local state from the descendant component and move it into its ancestor instead).

If something can be derived from either props or state, it probably shouldn’t be in the state.

### Why Lift States?

The advantage here is that the state of the parent component acts as a single source of truth for all the child components. It also means that every time the state of the parent is updated, all the subsequent child components will also get updated simultaneously, eliminating the need to update the states of the child components individually.

Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

### How does this work?

In this section, we will create a temperature calculator that calculates whether the water would boil at a given temperature, to better explain how to lift states in react.

#### Requirement:

Consider the component Calculator:

```jsx
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
```

Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync. We can start by creating a TemperatureInput component for the Calculator component. We will add a new scale prop to it that can either be "c" or "f":

```jsx
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </div>
    );
  }
}
```

We have two inputs now, but when you enter the temperature in one of them, the other doesn’t update. This contradicts our requirement: we want to keep them in sync. Also, the Calculator doesn’t know the current temperature because it is hidden inside the TemperatureInput. To solve these problems, we will be lifting the state up.

#### Lifting:

We will remove the local state from the TemperatureInput and move it into the Calculator instead. If the Calculator owns the shared state, it becomes the “source of truth” for the current temperature in both inputs. It can instruct them both to have values that are consistent with each other. Since the props of both. TemperatureInput components are coming from the same parent Calculator component, the two inputs will always be in sync.

First, we will replace this.state.temperature with this.props.temperature in the TemperatureInput component. We know that props are read-only. When the temperature was in the local state, the TemperatureInput could just call this.setState() to change it. However, now that the temperature is coming from the parent as a prop, the TemperatureInput has no control over it. In React, this is usually solved by making a component “controlled”. The onTemperatureChange prop will be provided together with the temperature prop by the parent Calculator component. It will handle the change by modifying its own local state, thus re-rendering both inputs with the new values.

The updated TemperatureInput becomes:

```jsx
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

We could have stored the value of both inputs but it turns out to be unnecessary. It is enough to store the value of the most recently changed input, and the scale that it represents. We can then infer the value of the other input based on the current temperature and scale alone.

The updated Calculator component becomes:

```jsx
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.tryConvert = this.tryConvert.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  tryConvert() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }

    let output = 0;
    if (scale === 'f') {
      output = ((input - 32) * 5) / 9;
    } else if (scale === 'c') {
      output = (input * 9) / 5 + 32;
    }

    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert() : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert() : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
```

Where tryConvert() returns an empty string on an invalid temperature, and it keeps the output rounded to the third decimal place, and BoilingVerdict accepts the Celsius temperature as a prop, and prints whether it is enough to boil the water.

#### Live Demo:

[Try in codepen](https://codepen.io/gaearon/pen/WZpxpz?editors=0010)

Now, no matter which input you edit, this.state.temperature and this.state.scale in the Calculator get updated. One of the inputs gets the value as is, so any user input is preserved, and the other input value is always recalculated based on it.

**Recap:**

- React calls the function specified as onChange on the DOM `<input>`. In our case, this is the `handleChange()` method in the `TemperatureInput` component.
- The `handleChange()` method in the `TemperatureInput` component calls `this.props.onTemperatureChange()` with the new desired value. Its props, including `onTemperatureChange()`, were provided by its parent component, the `Calculator`.
- When it previously rendered, the `Calculator` had specified that `onTemperatureChange()` of the Celsius `TemperatureInput` is the `Calculator`'s `handleCelsiusChange()` method, and `onTemperatureChange()` of the Fahrenheit `TemperatureInput` is the `Calculator`’s `handleFahrenheitChange()` method. So either of these two `Calculator` methods gets called depending on which input we edited.
- Inside these methods, the `Calculator` component gets React to re-render itself by calling `this.setState()` with the new input value and the current scale of the input we just edited.
- React calls the `Calculator` component’s `render` method to learn what the UI should look like. The values of both inputs are recomputed based on the current temperature and the active scale. The temperature conversion is performed here.
- React calls the `render` methods of the individual `TemperatureInput` components with their new props specified by the `Calculator`. It learns what their UI should look like.
- React calls the `render` method of the `BoilingVerdict` component, passing the temperature in celsius as its props.
- React DOM updates the DOM with the `BoilingVerdict` and to match the desired input values. The input we just edited receives its current value, and the other input is updated to the temperature after conversion.
- Every update goes through the same steps so the inputs stay in sync.

<EditedBy name="Akshay Vishnu Kishore" date="17/05/2020" />
