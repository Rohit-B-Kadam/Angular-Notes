# Two Way Binding

You often want to both display a data property and update that property when the user makes changes.

We have to combination property binding [ ] and event binding ( ) in one.

Syntax look like __[( )] = BANANA IN A BOX__:

        [(x)] = "ClassProperty".

Two way binding is use when we want to sent the data and receive data from same element or component.

So we can use this technique in:

- [Interactive Form](#ngmodel-two-way-binding-to-form-elements-with-ngmodel-).
- [Parent Child Communication](../InterComponentCommunication/README.md).

---

## NgModel - Two-way binding to form elements with [(ngModel)]

By using ngModel directive we can achive two way binding in form elements.

### Step 1. First we have to import the FormsModule and add it to the NgModule's imports list.

```ts

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // <--- import into the NgModule
  ],
  /* Other module metadata */
})

```

### Step 2. We have to create one property in component class to bind with ngModel

```ts
public UserName = '';
```

### Step 3. we have to write [(ngModel)] inside the Form element tag

```html
<input [(ngModel)]="UserName" type="text">
```

[code](./src/app)

---