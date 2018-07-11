# Interpolation

## Syntax

    {{ expression }}

## Decription

Angular evaluate all expression in double curly braces, converts the expression result into a string. Finally it is assign to HTML element.  
[view code](../src/app/)

---

## Template Expression

### Expression Allow

- Arthimetric

        {{ 2 + 3  }}

- Display property of class

        {{ FriendName }}

- Userdefined function must return string

        {{ fun() }}

- Inbulid Function

        {{ FriendName.toUpperCase() }}

- Concatination (+)

        {{ 2 + 5 + FriendName + fun() }}

### Exppression Not Allowed

- Assignments (=, +=, -=, ...)

        {{ FriendName = 'Shubham' }}
- new

        {{ obj = new Demo() }}

- increment and decrement operators (++ and --)
- no support for the bitwise operators | and &
- new template expression operators, such as |, ?. and !.

[Expression Guidelines](https://angular.io/guide/template-syntax#expression-guidelines)

---