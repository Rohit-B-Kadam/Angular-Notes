# Bootstrapping Crash Course

Every app have a main entry point.

When we run the app by `ng serve`, ng will look at the file angular.json to find the entry point of our app.

---

## Let’s trace how ng finds the components

At a high level, it looks like this:

- __angular.json__ specifies a "main" file, which in this case is __main.ts__.

```json
    ...
    "main": "src/main.ts",
    ...
```

- __main.ts__ is the entry-point for our app and it bootstraps our application.

```ts
    platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.log(err));

```

- __AppModule__ to bootstrap the app. AppModule is specified in src/app/app.module.ts.
- __AppModule__ specifies which component to use as the top level component. In this case it is __AppComponent__.
- __AppComponent__ has many component tags in the template and this renders that component.

---