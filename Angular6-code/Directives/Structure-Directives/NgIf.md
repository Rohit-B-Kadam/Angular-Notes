# NgIf

NgIf is the simplest structural directive and the easiest to understand. It takes a boolean expression and makes an entire chunk of the DOM appear or disappear.

The ngIf directive doesn't hide elements with CSS. It adds and removes them physically from the DOM.

We can hide the element using CSS. You can remove the element using NgIf. Using NgIf component is re-initialize.

---

## Three Type of Syntax

- *ngIf = "condition"

```html

    <h1 *ngIf="flag">Maharashtra</h1>

```

- *ngIf = "condition; else templateVar"

```html

    <h1 *ngIf="flag; else OtherPart">Hello</h1>

    <ng-template #OtherPart>
      <h1>
        World
      </h1>
    </ng-template>

```

- *ngIf = "condition; then templateVar1; else templateVar2"

```html

    <div *ngIf="flag; then ifblock; else elseblock"></div> 

    <ng-template #ifblock>
      <h1> Maharashtra </h1>
    </ng-template>

    <ng-template #elseblock>
      <h1> Karnataka </h1>
    </ng-template>

```

## [code](./src/app/ng-if)

---