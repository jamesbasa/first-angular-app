# FirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` (or `ng g c component-name --skip-tests`) to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Course Notes

Approaches for updating state:

1. Built-in change detection mechanism - Zone.js notifies Angular about user events, expired timers, etc.
2. Signals - Objects that store a value and notify Angular about value changes and required UI updates. Angular analyzes if you're reading a Signal and only recomputes the UI if the Signal changes.

- TS: `selectedUser = signal(DUMMY_USERS[randomIndex]);`
- HTML: `{{ selectedUser().name }}`

Directives (element enhancements; components are directives with templates):

- ngModel - helps with extracting or changing user input values
  - `<input ngModel>`, import FormsModule

Content Projection (inserting content inside another component):

```
<div>
  <ng-content />
</div>
```
