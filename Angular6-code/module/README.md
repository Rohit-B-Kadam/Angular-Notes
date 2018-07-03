# Module



## Introduction of Module

- Angular apps are modular and Angular has its own modularity system called NgModules. NgModule is a container.
- Every Angular app has at least one NgModule class, the root module(class name AppModule) (file name app.module.ts).
- You launch your app by _bootstrapping_ the root NgModule in main.ts.
- It  contain component , service provider and other code files whose scope is defined by the containing  NgModule.



## NgModule metadata

An NgModule is defined as a class decorated with `@NgModule`. The `@NgModule` decorator is a function that takes a single metadata object, whose properties describe the module.


- __declarations__ : The components, directives, and pipes that belong to this NgModule.

- __export__ : The subset of declarations that should be visible and usable in the component templates of other NgModule.

- __imports__ : Other modules whose exported classes are needed by component templates declared in this NgModule.

- __providers__ : Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. ( you can also specify providers at the component level, which is often preferred).

- __bootstrap__ : The main application view, called the root component, which hosts all other app views. Only the root NgModule should set this property.

Example
```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [ AppComponent ],
    exports:      [ AppComponent ],
    imports:      [ BrowserModule ],
    providers:    [ Logger ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
