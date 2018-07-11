# PropertyBinding

## Syntax

    [target] = "expression"
    bind-target = "expression"

## Description

- The binding [DOM property](./DOM_Property) to the value of a [template expression](../Interpolation/README.md#template-expression).
- HTML Attribute only initial value  of DOM Property and we can change property of DOM object using Property binding.
- Property binding only details with property of DOM(Document Object Model)

## Example

- Binding the src property of an image element to a component's heroImageUrl property:

        <img [src]="heroImageUrl">

- Disabling a button when the component says that it isUnchanged:

        <button [disabled]="isUnchanged">Cancel is disabled</button>

- Yet another is setting the model property of a custom component (a great way for parent and child components to communicate):

        <app-hero-detail [hero]="currentHero"></app-hero-detail>

[Demostration](./src/app/)