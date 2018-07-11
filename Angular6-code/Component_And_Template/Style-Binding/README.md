# StyleBinding and NgStyle

## Style Binding

You can set inline styles with a style binding.

### Syntax of style binding

    [style.style-property] = "expression"

### Use of style binding

```html

<!-- It looks like class binding-->
<h1 [style.color]="'red'">Marvellous Infosystems</h1>

<!-- We can also set the style depends on the condition as-->
<h1 [style.color]="IsSet ? 'green' : 'red' ">Pune Maharashtra</h1>

<!--We can also set the proerty through the class characteristics-->
<h1 [style.color]="MyColor">India</h1>
```

---

## NgStyle Directive

You can set inline styles dynamically, based on the state of the component. With NgStyle you can set many inline styles simultaneously.

```ts
   public currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px',
    'color':       this.IsSet        ? 'red'    : 'green'
   };

```

```html
<h1 [ngStyle]="currentStyles"> Earth </h1>
```

---

## [code](./src/app)