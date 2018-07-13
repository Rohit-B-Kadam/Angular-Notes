# NgSwitch

The Angular NgSwitch is actually a set of cooperating directives: `NgSwitch` , `NgSwitchCase` and `NgSwitchDefault`

## Syntax

    [ngSwitch] = "SearchPattern"
    *NgSwitchCase = "Pattern"
    *NgSwitchDefault

## Example

```html

    <div [ngSwitch]="SelectedBatch">
      Information: {{SelectedBatch}}

      <div *ngSwitchCase="'Project'">
          You select Industrial Project Batch batch
      </div>

      <div *ngSwitchCase="'UNIX'">
          UNIX internal and LSP
      </div>

      <div *ngSwitchCase="'Angular'">
          front-end web development framework
      </div>

      <div *ngSwitchDefault>
        Select Batch
      </div>
    </div>

```

You'll get error if you try to set *ngSwitch because NgSwitch is Attribute Directive, not the Structure Directive.

Bind to *ngSwitchCase and *ngSwitchDefault. The NgSwitchCase and NgSwitchDefault directives are structural directives because they add or remove elements from the DOM.

- __NgSwitchCase__ adds its element to the DOM when its bound value equals the switch value.
- __NgSwitchDefault__ adds its element to the DOM when there is no selected NgSwitchCase.

---

## [code](./src/app/ng-switch)

---