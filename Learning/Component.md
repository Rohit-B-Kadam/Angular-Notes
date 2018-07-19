# Component

This is the fundamental idea behind components: we will teach the browser new tags that have custom functionality attached to them. like `<login>` tag that shows a login panel.

- app-root is a component that is defined by our Angular application.
- __The `<app-root>` tag is where our application will be rendered.__

---

## Contains

1. [Create Component](#create-component)
2. [Component Decorator](#component-decorator)
3. [Component Class](#component-class)
4. [Loading Our Component](#loading-our-component)

---

## Create Component

    ng generate component Component-Name

- It will create four file:

    1. `Component-Name.component.css` : Style file
    2. `Component-Name.component.html` : Template file
    3. `Component-Name.component.ts` : Component file (main file)
    4. `Component-Name.component.spec.ts` : Testing file

- Update One file:

    1. `app.module.ts` : new created Component is imported.

---

## A basic Component has two parts

1. A Component Decorator.
2. A component definition class.

### Component Decorator

```ts
//First way
    @Component({
        selector: 'app-hello-world',
        templateUrl: './hello-world.component.html',
        styleUrls: ['./hello-world.component.css']
    })

//Second Way
    @Component({
    selector: 'app-hello-world',
    template:   `
        <p> hello-world works inline! </p>
        `,
    styles: ['font-color:red'];
    })
```

- Decorator is indentify by `@`.
- We can think you __decorators as a metadata to our code.__
- `selector` we’re defining a new tag which will create instance of our component.
- We can define templates two ways, either by using the `template` key in our @Component object or by specifying a `templateUrl`.
- Using backticks (`) for multiline strings makes it easy to put templates inside your code files.
- Angular uses a concept called “style-encapsulation” which means that styles specified for a particular component only apply to that component.
- `styles` accept array as it’s argument. This is because we can load multiple stylesheets for a single component.

---

### Component Class

```ts

    export class UserListComponent implements OnInit {
        public names: string[]; // <-- add component property

        constructor()   // <-- constructor
        {
            this.names = ['Sonam' , 'Shubhya' , 'Sankya' , 'Harshal' , 'Abhya' , 'Chandya'];
        }

        ngOnInit() { }
    }

```

1. `constructor()`: Constructor is a function that is called when we create new instances of this class.
2. `names` : Property of the component.
3. `ngOnInit()` helps us to run code when we initialize the component.

---

## Loading Our Component

- We need to add our component tag to a template that is already being rendered.
- component tag is defined in `selector` in `@Component`.

---