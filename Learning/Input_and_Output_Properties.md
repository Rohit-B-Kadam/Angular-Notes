# Input and Output Properties

An Input property is a settable property annotated with an `@Input` decorator. Value flow into the property when the data is bound with [property binding](../Angular6-code/Component_And_Template/Property-Binding/README.md).

An Output property is an Observable property annotated with an `@Output` decorator. The property almost always returns an EventEmitter. Values flow out of the component as events bound with an [event binding](../Angular6-code/Component_And_Template/Event-Binding/README.md).

In Angular Class Characteristic is call property.

---

You've bound template HTML to component properties before and never used @Input. What's different?

The difference is a matter of trust. Angular treats a component's template as belonging to the component. The component and its template trust each other implicitly. Therefore, the component's own template may bind to any property of that component, with or without the @Input decorator.

But a component or directive shouldn't blindly trust other components and directives. The properties of a component or directive are hidden from binding by default. They are private from an Angular binding perspective. When adorned with the @Input decorator, the property becomes public from an Angular binding perspective. Only then can it be bound by some other component or directive.

You can tell if @Input is needed by the position of the property name in a binding.

When it appears in the template expression to the right of the equals (=), it belongs to the template's component and does not require the @Input decorator.

When it appears in square brackets ([ ]) to the left of the equals (=), the property belongs to some other component or directive; that property must be adorned with the @Input decorator.

---

## Binding to a different component

```html
<app-hero-detail [hero]="currentHero" (deleteRequest)="deleteHero($event)">
</app-hero-detail>
```

The Angular compiler won't bind to properties of a different component unless they are Input or Output properties.

All data bound properties must be TypeScript public properties. Angular never binds to a TypeScript private property.

Angular requires some other way to identify properties that outside components are allowed to bind to. That other way is the @Input() and @Output() decorators.

---

## Declaring Input and Output properties

