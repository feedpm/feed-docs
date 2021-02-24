---
id: coding-guidelines
title: Coding guidelines
sidebar_label: Coding guidelines
---

import EditedBy from '../../src/components/EditedBy'

### Use Angular CLI

This command line interface helps you scaffold your code in minutes. It references components into their own modules and complies with naming conventions as well.

Refer: [Angular CLI](https://cli.angular.io 'Angular CLI')

---

### Folder structure

Split your app into core, shared and multiple feature modules.

<dl>
  <dt>[ project root ]</dt>
    <dd>|--- src
      <dd>|--- app
        <dd>|--- core
          <dd>|--- [+] guard</dd>
          <dd>|--- [+] interceptor</dd>
          <dd>|--- [+] service</dd>
          <dd>|--- [+] model</dd>
        </dd>
        <dd>|--- shared
          <dd>|--- component
            <dd>|--- [+]spinner</dd>
          </dd>
          <dd>|--- services
            <dd>|--- validation.service.ts|spec.ts</dd>
          </dd>
          <dd>|--- [+] pipes</dd>
          <dd>|--- [+] directives</dd>
          <dd>|--- shared.module.ts</dd>
        </dd>
        <dd>|--- layout
          <dd>|--- [+] auth-layout</dd>
          <dd>|--- [+] content-layout</dd>
          <dd>|--- [+] footer</dd>
          <dd>|--- [+] header</dd>
        </dd>
        <dd>|-- user-profile
          <dd>|--- [+] edit-profile</dd>
          <dd>|--- [+] view-profile</dd>
          <dd>|--- user-profile.component.ts|html|scss|spec.ts</dd>
          <dd>|--- user-profile.module.ts</dd>
          <dd>|--- user-profile-routing.module.ts</dd>
        </dd>
        <dd>|--- app.component.ts|html|scss|spec.ts</dd>
        <dd>|--- app.module.ts</dd>
        <dd>|--- app-routing.module.ts</dd>
      </dd>
      <dd>|--- main.ts</dd>
      <dd>|--- [+] environments</dd>
    </dd>
</dl>

### Core module

This module is for classes used by app.module. Resources which are always loaded such as route guards, HTTP interceptors, and application level services, such as the AuthenticationService and logging belongs to this directory.

### Shared module

Shared module can have components, directives and pipes that will be shared across multiple modules and components, but not the entire app necessarily.

We already have a Angular boilerplate that follows the aforementioned rules and can be used for new projects.

[FEED Angular Boilerplate](https://code.qburst.com/lawrence/angular-8-boilerplate)

---

### Naming Conventions

| Type | Syntax | Example |
| --- | :-- | :-- |
| File Name | Dashed Case/Kebab Case <br/> feature(.component/.pipe/.module/.directive).ts | user-list.component.ts, logger.service.ts |
| Class Name | Upper Camel Case/Pascal Case | TrainingListComponent, ValidationDirective |
| Component Selector Name | Dashed Case/Kebab Case | `'admin-users', 'fd-title-bar'` (fd stands for FEED Docs) |

---

### Single Responsibility

Redistribute the component and its supporting classes into their own, dedicated files. A class should have only one job.

---

### Lazy load feature module

A feature module shouldn’t be loaded initially, but when only you decide to initiate it. Thereby making your Angular app load faster. Here is an example on how to initiate a lazy loaded feature module via _app-routing.module.ts_ file.

```js
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    component: CoreComponent,
  },
];
```

### Use tree-shakable providers

```js
@Injectable({
  providedIn: 'root'
})
```

Please note that _root_ can be replaced with any module where you wish to provide your service with.

---

### Create aliase for imports

Use aliases for imports that are several levels deep.

```js
import {LoaderService} from '../../../loader/loader.service';
```

This can be configured in _tsconfig.json_ file.

```js
{
  "compileOnSave": false,
  "compilerOptions": {
    removed for brevity,
    "paths": {
      "@app/*": ["app/*"],
      "@env/*": ["environments/*"]
    }
  }
}
```

And resulting code will look like:

```js
import { LoaderService } from '@app/loader/loader.service';
import { environment } from '@env/environment’;
```

---

### Use interfaces

Use interface for data models. Interfaces are completely removed during compilation and so they will not add any unnecessary bloat to your final code.

---

### Set up ENV variables

Use environment files for storing app keys/secrets. Create an example environment file with placeholders to provide information about fields required and push it to source control . Its also good practice to maintain separate environment files for _develop_, _staging_, and _prod_ environments.

**Do not check in the actual environment file to source control and create a security vulnerability!**

---

### Use directives

Use directives when same behavior is repeated for HTML elements. Example - hover animations.

---

### Use trackby\*

When using ngFor to loop over an array in templates, use it with a _trackByfunction_ which will return an unique identifier for each item. When an array changes, Angular re-renders the whole DOM tree. But if you use _trackBy_, Angular will know which element has changed and will only make DOM changes for that particular element.

---

### Prevent null exceptions

Use the safe navigation operator while accessing an object's property from a template. This helps in avoiding exceptions.

```js
<div class="col-md-3">
  {{user?.name}}
</div>
```

---

### Preserve immutability to avoid suprises

The easiest way to avoid messing up objects and arrays unintentionally is by using the _ES6 spread operator (...)_.

Original object

```js
this.user = {
  name: 'Dzon',
  age: 25,
  addr
```

Cloned object

```js
let updatedUser = {
  ...this.user,
  name: 'Peter',
};
```

---

### Prevent memory leaks

- When subscribing to observables, always make sure you unsubscribe from them appropriately by using operators like take, takeUntil, etc.
- Make use of _async pipe_ wherever applicable.

---

### Avoid logic in template

Avoid complex logic in templates as it is harder to debug and less maintainable. Extract complex logic to functions in the component file instead.

---

### Keep it tidy

- Limit files to 400 Lines of code.
- Try to be DRY.
- Define small functions (no more than 75 lines).

---

### Member sequence

- Place properties up top followed by methods.
- Place private members after public members, alphabetized.

### Cheetsheet

| Description | Avoid | Recommended Usage |
| --- | :-- | :-- |
| Component selectors | `selector: 'fdTitleBar'` | `selector: 'fd-title-bar'` |
| Component custom prefix | `selector: 'title'` | `selector: 'fd-title'` |
| Directive selectors | `selector: '[validate]'` | `selector: '[fdValidate]'` |
| Pipe names (init-caps.pipe.ts) | `@Pipe({ name: 'init-caps' })` | `@Pipe({ name: 'initCaps' })` |
| Components as elements | `<div fdTitleBar></div>` | `<fd-title-bar></fd-title-bar>` |
| Decorate input and output properties | `inputs: ['label']` | `@Input() label: string;` |
|  | `outputs: ['titleChange']` | `@Output() titleChange = new EventEmitter<any>();` |
| Dont prefix output properties | `@Output() onSavedTheDay = new EventEmitter<boolean>();` | `@Output() savedTheDay = new EventEmitter<boolean>();` |
| Put presentation logic in the component class | `Average power: {{totalPowers / items.length}}` | `Average power: {{avgPower}}`<br/> In Component,<br/> `get avgPower() { return this.totalPowers / this.items.length;}` |
| Use the @Injectable() class decorator | `@Inject(HttpClient) private http: HttpClient` | `@Injectable()` <div>`export class HeroArena {constructor(private http: HttpClient) {}}`</div> |

### Further reading

[Official Angular style guide](https://angular.io/guide/styleguide)

<EditedBy name="Indu Rani" updated="Reshma S Raveendran" date="21/04/2020" />
