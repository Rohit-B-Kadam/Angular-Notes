# Custom Attribute Directives

Custom directives are used in Angular to extend the functionality of HTML.

---

## This page covered how to

1. [Build an attribute directive](#build-an-attribute-directive) that modifies the behavior of an element.
2. [Apply the directive](#apply-the-directive) to an element in a template.
3. [Respond to events that](#respond-to-user-initiated-events) change the directive's behavior.
4. [Bind values to the directive](#bind-values-to-the-directive).

---

## Build an attribute directive

Create the directive class file in a terminal window with this CLI command

    $ng generate directive highlight

Due to this command one .ts file ( here [highlight.directive.ts](./src/app/highlight.directive.ts)) gets created. In that file there is one class which gets exported and we can write our logic in that class which gets executed when we use the custom directive.

---

## ElementRef

- We have to inject ElementRet in directive `constructor()`.
- First we have to import ElementRef symbol from the Angular core library:
- You use the ElementRef in the directive's constructor to inject a reference to the host DOM element, the element to which you applied appHighlight.
- `ElementRef` grants direct access to the host DOM element through its `nativeElement` property.

```ts
    import { Directive } from '@angular/core';
    import { ElementRef } from '@angular/core';   // import for get ref of host element

    @Directive({
      selector: '[appHighlight]'
    })

    export class HighlightDirective {
      // Use dependency injection to access DOM element
      constructor( private el: ElementRef ) {
        el.nativeElement.style.backgroundColor = 'yellow';
      }
    }

```

## Apply the directive

```html
    <h2 appHighlight >
        Highlight me
    </h2>
```

To summarize, Angular found the appHighlight attribute on the host `<h2>` element. It created an instance of the HighlightDirective class and injected a reference to the `<h2>` element into the directive's constructor which sets the `<h2>` element's background style to yellow.

---

## Respond to user-initiated events

The directive could be more dynamic. It could detect when the user mouses into or out of the element and respond by setting or clearing the highlight color.

__Step 1: Begin by adding `HostListener` to the list of imported symbols.__

```ts
  import { HostListener } from '@angular/core';
```

__Step 2: Then add two eventhandlers that respond when the mouse enters or leaves, each adorned by the HostListener decorator.__

```ts

   @HostListener('mouseenter') onmouseenter() {
    this.setcolor('yellow');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.setcolor(null);
  }

  setcolor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

```

---

## Bind values to the directive

We can give a developer the power to set the highlight color while applying the directive. Follows the bellow steps:

__Step1: Begin by adding `Input` to the list of imported  symbols.__

```ts
  import { Input } from '@angular/core';
```

__Step 2: Add a highlightColor property to the directive class like this:__

```ts
  @Input() highlightColor: string;
```

__Step 3: Try it by adding the following directive binding variations to the AppComponent template:.__

```html
  <h2 appHighlight highlightColor="yellow">Highlighted in yellow</h2>
  <h2 appHighlight [highlightColor]="color">Highlighted in orange</h2>
```

`color` is property of component.

That's good, but it would be nice to simultaneously apply the directive and set the color in the same attribute like this.

```html
<h2 [appHighlight]="color">Highlight me!</h2>
```

__Step 4: Bind to an @Input alias.__

```ts
  @Input('appHighlight') highlightColor: string;
```

Inside the directive the property is known as highlightColor. Outside the directive, where you bind to it, it's known as appHighlight.

__Step 5: Bind to a second property.__

You can add as many directive property bindings.

- Add a second input property to HighlightDirective called defaultColor:

```ts
  @Input() defaultColor: string;
```

- Revise the directive's onMouseEnter so that it first tries to highlight with the highlightColor, then with the defaultColor, and falls back to "red" if both properties are undefined.

```ts
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
```

- Why we add second property ?

Think like this, developer is setting color depending upon the user selection. But if the user don't select the color then hardcoded value set by the directive will be selected in our case hardcoded value is 'red'. But developed want to set this color if the user don't select the color. So we have provided second property to developer to set his default color.

```html
  <h2 [appHighlight]="color" defaultColor="violet">
    Highlight me too!
  </h2>
```

---

## [check all code](./src/app)

---

### nativeElememt function of ElementRef

- To set background color

```css
  <p style = "background-color: lightblue;" >
```

```ts
  this.el.nativeElement.style.backgroundColor = 'red';
```

- To change color of text.

```css
  <p style = "color: lightblue;" >
```

```ts
  this.el.nativeElement.style.backgroundColor = 'red';
```

- To bold the text.

```css
  <p style = "font-weight: bold;" >
```

```ts
  this.el.nativeElement.style.fontWeight = 'bold';
```

we can use all the css property in camalCase style

---