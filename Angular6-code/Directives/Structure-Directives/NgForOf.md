# NgForOf

NgForOf is a repeater directive — a way to present a list of items.

NgForOf is directive name and ngFor is Attribute name

```html

    <div *ngFor="let hero of heroes">{{hero.name}}</div>

    <app-hero-detail *ngFor="let hero of heroes" [hero]="hero"></app-hero-detail>

```

## Syntax

    *ngFor = "let value of items"

- `"let value of items"` ==> Microsyntax
- `value` ==> Template input
- `items` ==> Array listed in .ts file

---

## Detail

### Microsyntax

- The string assigned to `*ngFor` is not a template expression.
- It's a microsyntax — a little language of its own that Angular interprets.
- The string `"let hero of heroes"` means: Take each hero in the heroes array, store it in the local hero looping variable, and make it available to the templated HTML for each iteration.

### Template Input Variable

- You declare a template input variable using the let keyword (let hero).
- The variable's scope is limited to a single instance of the repeated template.

---

## Advance NgForOf

Syntax:

```html
    <li *ngFor="let item of items; let i = index; trackBy: trackByFn">...</li>
```

---

### *ngFor with index

The index property of the NgForOf directive context returns the zero-based index of the item in each iteration. You can capture the index in a template input variable and use it in the template.

The next example captures the index in a variable named i and displays it with the hero name like this.

```html
    <div *ngFor="let hero of heroes; let i=index">
        {{i + 1}} - {{hero.name}}
    </div>
```

---

### *ngFor with trackBy

---

### *ngFor with Local Variable

- first: boolean: True when the item is the first item in the iterable.
- last: boolean: True when the item is the last item in the iterable.
- even: boolean: True when the item has an even index in the iterable.
- odd: boolean: True when the item has an odd index in the iterable.

Example:

```html
    <h3> First Hero:</h3>
    <span *ngFor="let hero of heroes;
                  let isFirst = first;">

        <span *ngIf = "isFirst">
            {{ hearo }}
        </span>
    </span>
```

---

## code

- [NgFor](./src/app/ng-for)
- [NgFor with Index](./src/app/ng-for-index)
- [NgFor with TrackBy](./src/app/ng-for-track-by)