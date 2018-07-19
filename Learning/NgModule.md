# Angular module system NgModule

__Angular has a powerful concept of modules.__

When you boot an Angular app, you’re not booting a
component directly, but instead you create an NgModule which points to the component you want
to load.

app.module.ts

```ts

    @NgModule({
      declarations: [
        AppComponent,
        HelloWorldComponent,
        UserItemComponent,
        UserListComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })

    export class AppModule { }

```

---

Our @NgModule decorator has four keys: declarations , imports , providers , and bootstrap.

__1. declarations:__

- Specifies the component that is defined in this module.
- You have to declare components in a NgModule before you can use them in your templates.

__2. imports:__

- imports describes which dependencies this module has. We’re creating a browser app, so we want to import the BrowserModule.
- If your module depends on other modules, you list them here.

__3. providers:__

- providers is used for dependency injection. So to make a service available to be injected throughout our application.

__4.bootstrap:__

- bootstrap tells Angular that when this module is used to bootstrap an app, we need to load the AppComponent component as the top-level component.

---

__import vs. imports ?__

You might be asking the question, “What’s the difference between import ing a class at the top of the file and putting a module in imports ?”

The short answer is that you put something in your NgModule ’s imports if you’re going to be using it in your templates or with dependency injection.