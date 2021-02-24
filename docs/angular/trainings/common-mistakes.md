---
id: common-mistakes
title: Common Mistakes in writing Angular Application
sidebar_label: Common Mistakes
---

import EditedBy from '../../../src/components/EditedBy'

Let's understand top-rated common mistakes made, and see how they can be fixed!

### Forgetting To Unsubscribe

Whenever we are using any subscriptions for observables or any events in our angular application, more often we forget to unsubscribe those events. In case, If we are not unsubscribing those events then it might lead to memory leaks across the entire system. Thus, we need to stop this immediately or should fix it in the initial stage itself.

#### <u>Solution</u>

Mostly, when you subscribe in a component, the better place to unsubscribe is in the **OnDestroy** lifeCycle hook. When you subscribe in a service, there is no lifeCycle hook, so you need to initiate it by yourself.

```javascript
@Component({ ... })
export class HeroComponent implements OnInit, OnDestroy {
  heroForm: FormGroup;
  valueChanges$: Observable;

  ngOnInit() {
    this.valueChanges$ = this.heroForm.valueChanges.subscribe(...);
  }

  ngOnDestroy() {
    this.valueChanges$.unsubscribe();
  }
}
```

### Using Client-side Pagination

When you use Client side pagination, Initially, you have to load the entire data. By the time, if you have fewer records then it will be easy to load. In future, when you have more number of records then it will be really hard at that time when the initial loading begins.

#### <u>Solution</u>

**Server Side pagination**: Using server-side pagination we can predominantly solve this issue. When you do server-side pagination, it will peculiarly hit the specific page number and will load the particular page records accordingly.

## Involving jQuery

jQuery is a standard library used for the web and mobile applications. Whenever we want to do any DOM manipulations, immediately we might think of jQuery. But jQuery is not the best way to solve a problem in angular, much as Angular itself has plenty of its own features which you can effectively make use in your application instead of using third-party libraries for DOM manipulations.

## @Component.providers vs @NgModule.providers

The Hierarchical dependency injection, services can instantiate more than one times in the angular application

For example to fetch an api response:

```javascript
@Injectable()
export class HeroesService {
  heroes: Hero[] = [];

  constructor(private http: Http) {
    this.http.get('http://give-me-heroes.com').map(res => {
      return res.json();
    }).subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }

  getHeroes() {
    return this.heroes;
  }
}
```

As we can see, the service fetches the data in the constructor.

In the component:

```javascript
@Component({
  selector: 'hero',
  template: '...',
  providers: [HeroesService]
})
export class HeroComponent {
  constructor(private heroesService: HeroesService) {}
}

@NgModule({
  declarations: [HeroComponent]
}
export class HeroesModule { ... }
```

The HeroComponent declare the HeroesService provider in the @Component.providers array and inject it in the constructor. The problem with this code is that **every HeroComponent instance will instantiate a new instance of the HeroesService**. So, the service will fetch the data by HTTP request multiple times because of the Hierarchical DI.

#### <u>Solution</u>

**@NgModule.providers:**

```javascript
@Component({
  selector: 'hero',
  template: '...'
})
export class HeroComponent {
  constructor(private heroesService: HeroesService) {}
}

@NgModule({
  declarations: [HeroComponent],
  providers: [HeroesService]
}
export class HeroesModule { ... }
```

Now, the provider will be instantiated only one time for all the HeroComponent instances. This will happen because, **when a provider is declared in the NgModule, it will be a singleton and all the other modules will be able to use it**. There is no need to export a provider in the @NgModule.exports array. It will be done automatically.

### Declaring Component Multiple Times

Component is the main part we need to consider in angular application. Every component needs to be declared in corresponding NgModule of declarations array. There is no way to declare one component in more than one NgModule. If you declare then it might throw you an error. So, If you really want to use one component in multiple modules then the best way to do is to move that component to the shared module including the declarations array and exports array as well

```javascript
@Component({
  selector: 'hero',
  template: '...',
})
export class HeroComponent { ... }

@NgModule({
  declarations: [HeroComponent]
}
export class HeroesModule { ... }

@NgModule({
  declarations: [HeroComponent]
}
export class AnotherModule { ... }
```

the component is declared in the HeroesModule and also in the AnotherModule.

#### <u>Solution</u>

Using Shared modules,

```javascript
NgModule({
  declarations: [HeroComponent],
  exports: [HeroComponent]
}
export class SharedModule { ... }

NgModule({
  imports: [SharedModule]
}
export class HeroesModule { ... }

@NgModule({
  imports: [SharedModule]
}
export class AnotherModule { ... }
```

### Inconsistent Naming

Another common mistake is inconsistency in naming things, not having a common name for components, services, functions, variables which might get us confused to understand the original functional flow. You can overcome this unwanted conflicts by using a proper name for identifying components, services, functions and etc and this will help us to quickly address the changes without any conflicts.

### Irrelevant Commit Messages

Sometimes a single irrelevant commit message can change the entire the code as it confuses the code reviewers. Also, it remains a pit hole for developers to find where they exactly need to revert the changes. So, avoid giving irrelevant commit messages & make sure to check before you proceed, also don’t forget to follow good standards from git.

<EditedBy name="Ajay C" date="03/04/2020" />
