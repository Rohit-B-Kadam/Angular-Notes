# Structure Directives

 Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, and manipulating the host elements to which they are attached.

 Structural directives are easy to recognize. It start with asterisk (*). [why you prefix the directive name with an asterisk?](https://angular.io/guide/structural-directives#the-asterisk--prefix)

A directive class is spelled in UpperCamelCase (NgIf). A directive's attribute name is spelled in lowerCamelCase (ngIf).

Three common structure directive:

- [NgIf](NgIf.md) - conditionally add or remove an element from the DOM.
- [NgSwitch](NgSwitch.md) - display one element from among several possible elements.
- [NgForOf](NgForOf.md) - repeat a template for each item in a list.

---

## Content

- [NgIf](NgIf.md#ngif)
- [NgSwitch](NgSwitch.md)
- [NgForOf](NgForOf.md)
- [NgFor - Index](NgForOf.md#-ngfor-with-index)
- [NgFor - TrackBy](NgForOf.md#-ngfor-with-trackby)
- [`<ng-template>`](#ng-template)
- [`<ng-container>`](#ng-container)
- [Nested Structure Directive code](./src/app/nested-structure)
- [Custom Structure Directive]
- [docs](https://angular.io/guide/structural-directives)
- Studying the [source code for NgIf](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_if.ts) and [NgForOf](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_for_of.ts) is a great way to learn more.

---

## Angular Tags

Some time we can't use HTML tag to write structure directive in it. So Angular have given some tag which will not affect display but all structure directive work fine.

### `<ng-template>`

The `<ng-template>` is an Angular element for rendering HTML. It is never displayed directly. In fact, before rendering the view, Angular replaces the `<ng-template>` and its contents with a comment.

Mostly it is use in `*ngIf` Structure directive.[code](./src/app/ng-if)

```html

    <div *ngIf="flag; then ifblock; else elseblock"></div>

    <ng-template #ifblock>
      <h1> Maharashtra </h1>
    </ng-template>

    <ng-template #elseblock>
      <h1> Karnataka </h1>
    </ng-template>

    <!--This will not display-->
    <ng-template>
        This will not display
    <ng-template>

```

### `ng-container`

The Angular `<ng-container>` is a grouping element that doesn't interfere with styles or layout because Angular doesn't put it in the DOM.

Problem:

- The grouping element (like `<div>` , `<span>`) may break the template appearance because CSS styles neither expect nor accommodate the new layout.
- some HTML elements require all immediate children to be of a specific type. For example, the `<select>` element requires `<option>` children. You can't wrap the options in a conditional `<div>` or a `<span>`.

```html

    <select>
      <ng-container *ngFor="let language of ProgrammingLanguage">
        <ng-container *ngIf="language.Development == typeSelected">
          <option [ngValue]="language.Name">{{ language.Name }}</option>
        </ng-container>
      </ng-container> 
    </select>

```

---