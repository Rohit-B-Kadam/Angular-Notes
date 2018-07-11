# EventBinding

With Help of Event binding data can be flow from view to component.

Event binding syntax consists of a target event name within parentheses on the left of an equal sign, and a quoted template statement on the right.

## Syntax

    (target) = "statement"
    on-target = "statement"

### Example

```html
<button (click)="MarvellousEvent()">Marvellos</button>

<button on-click="MarvellousNewEvent()">Infosystems</button>
```

---

## $event

- By using $event we can fetch information about the event.
- The shape of the event object is determined by the target event.
- If the target event is a native DOM element event, then $event is a DOM event object, with properties such as target and target.value.

### Example of $event

- Sending full $event (DOM event object) to component

```html
<button (click)="MarvellousEventInfo($event)">EventInformation</button>
```

```ts
public MarvellousEventInfo(value) {
    console.log(value); //logic
}
```

- Sending value of input element

```html
    <input type="text" (input)="receiveData = $event.target.value">
```

---

## Custom events with EventEmitter

We can create custom event using EventEmitter and $event.

- We create custom event for child to communicate with thier parent.

```html
    <app-child-component (eventEmitterObj)="parentCatchPayload = $event" ></app-hero-detail>
```

---

## Template Statement

- A template statement responds to an event raised by a binding target.
- The template statement supports basic assignment (=).

        <div (myClick)="clickMessage=$event" clickable>click with myClick</div>

- However, certain sytax is not allowed: ( new , ++ and --, += and -= , template expression operators)

---