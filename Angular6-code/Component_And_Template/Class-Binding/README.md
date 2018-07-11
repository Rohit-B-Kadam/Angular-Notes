# Class Binding and NgClass Directive

## Class Binding

You can add and remove CSS class names from an element's class attribute with a class binding.A class binding is a good way to add or remove a single class.

### Syntax of ClassBinding

    [class] = "className"
    [class.classname] = "condition"

### Use of ClassBinding

We can set the class in typescript file. MyClass property is set in typescript file.

```html
<h1 [class]="MyClass">
  Educating for better tomorrow..
</h1>
```

We can set class property depending upon the condition

```html
<h1 [class.success]="IsSet">
  Piyush Khairnar
</h1>
```

---

## NgClass Directive

NgClass is use to add and remove multiple CSS classes dynamically.

### Syntax of NgClass

    [ngClass] = "MultiClassArray"

### Use of NgClass

Change the text color to "green" if isset is true otherwise green

In TypeScript

```ts
public SetClass = {
    "success" : this.IsSet,
    "failure" : !(this.IsSet)
}
```

In HTML

```html
<h1 [ngClass]="SetClass" >
    Rohit Kadam
</h1>
```

---

## [code](./src/app/)
