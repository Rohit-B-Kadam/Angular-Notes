# Component

Components are the fundamental building block of Angular applications.

- The “application” `<app-root>` itself is just the top-level Component. Then we break our application into smaller child Components.
- __The `<app-root>` tag in index.html, where our application will be rendered.__

---

## Table of Contains

1. [Create Component](#create-component)
2. [Component Composed Of:](#Each-component-is-composed-of-three-parts)
3. [Component Decorator](#component-decorator)

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

## Each component is composed of three parts

- Component Decorator
- A View
- A Controller

---

### Component Decorator

The @Component is called a decorator. __It adds metadata to the our class__.

The @Component decorator specifies:

1. A `selector` , which tell a name of our component which we will use as a tag in template to initialize our component.

2. A `template` , which defines the view of our component.
    - We can define templates two ways, either by using the `template` key in our @Component object or by specifying a `templateUrl`.

3. A `styles` , define style to our component.
    - Angular uses a concept called “style-encapsulation” which means that styles specified for a particular component only apply to that component.

---

### Component Controller

The Component controller is defined by a class.

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