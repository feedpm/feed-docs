---
id: intro
title: React Native
sidebar_label: Introduction
---

import EditedBy from '../../src/components/EditedBy'

React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android and iOS. It use React along with native platform capabilities. React primitives render to native platform UI, so your app uses the same native platform APIs native apps do.

### Prerequisite

- Install Homebrew
- `brew install node`
- `brew install yarn`
- `brew install watchman`
- Install Xcode & CocoaPods
- `brew cask install adoptopenjdk/openjdk/adoptopenjdk8`
- Install Android Studio
- Configure the ANDROID_HOME environment variable

### Creating & Running a new application

- `npx react-native init AwesomeProject` - creates a new project
- `yarn start` - runs a development server
- `yarn android` - runs Android app
- `yarn ios` - runs iOS app

### Hello World Example

```jsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World 🎉</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});
```

<EditedBy name="Firoz Ahmed" date="21/05/2020" />
