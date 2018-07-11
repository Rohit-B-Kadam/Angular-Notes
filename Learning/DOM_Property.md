# HTML attribute vs. DOM property

The distinction between an HTML attribute and a DOM property is crucial to understanding how Angular binding works.

Attributes are defined by HTML. Properties are defined by the DOM (Document Object Model).

- A few HTML attributes have 1:1 mapping to properties. id is one example.

- Some HTML attributes don't have corresponding properties. colspan is one example.

- Some DOM properties don't have corresponding attributes. textContent is one example.

- Many HTML attributes appear to map to properties ... but not in the way you might think!

That last category is confusing until you grasp this general rule:

Attributes initialize DOM properties and then they are done. Property values can change; attribute values can't.

For example, when the browser renders `<input type="text" value="Bob">`, it creates a corresponding DOM node with a value property initialized to "Bob".

When the user enters "Sally" into the input box, the DOM element value property becomes "Sally". But the HTML value attribute remains unchanged as you discover if you ask the input element about that attribute: input.getAttribute('value') returns "Bob".

The HTML attribute value specifies the initial value; the DOM value property is the current value.

The disabled attribute is another peculiar example. A button's disabled property is false by default so the button is enabled. When you add the disabled attribute, its presence alone initializes the button's disabled property to true so the button is disabled.

Adding and removing the disabled attribute disables and enables the button. The value of the attribute is irrelevant, which is why you cannot enable a button by writing `<button disabled="false">Still Disabled</button>`.

Setting the button's disabled property (say, with an Angular binding) disables or enables the button. The value of the property matters.

The HTML attribute and the DOM property are not the same thing, even when they have the same name.