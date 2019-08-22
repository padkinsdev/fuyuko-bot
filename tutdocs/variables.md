# Writing Commands For Fuyuko
For `froggyhugger` / Docs v1.0.0
## Variables:
### Basics
Variables are declared using the `var` or `let` keywords. The difference between the two is somewhat confusing, so I would recommend only using the `var` keyword.  
Example of a variable being declared:
```javascript
var githubURL = "https://github.com/padkinsdev/fuyuko-bot/";
```
### Scope:
Variable scope refers to where a variable can be "seen", meaning where you can retrieve the value assigned to the variable.  
__Local Scope__ refers to variables that are declared inside of functions. These variables can only be accessed (they only exist) *within that function.*  
Example:
```javascript
function myFunc(){
  var x = 5;
  // x can be accessed here
}
// x can't be accessed here
```
__Global Scope__ refers to variables that are declared outside of functions, and can be accessed anywhere in the program after the location where they're declared.  
Example:
```javascript
// y can't be accessed here

var y = 5;

// y can be accessed here

function myFunc(){
  // y can be accessed here
}
```
#### Optional:
__Block Scope__ refers to variables that are declared inside of a set of `{}` brackets. These variables are declared using the `let` keyword, and can only be accessed inside the code block (a code block starts with `{` and ends with `}`) in which they are declared.  
Example:
```javascript
// z can't be accessed here

for (let z = 0; z < 10; z++){
  // z can be accessed here
}

// z can't be accessed here
```
### Why is scope useful?
An example of why scope can be useful can be seen in the following code snippet:
```javascript
var xyz = 20;

for (let xyz = 1; xyz <= 5; xyz++){
  console.log(xyz);
}

console.log(xyz);
```
In the above code example, the program would display
```
1
2
3
4
5
20
```
because global variable xyz is considered to be a different variable than variable xyz in the `for` loop. Compare this to
```javascript
var xyz = 20;

for (var xyz = 1; xyz <= 5; xyz++){
  console.log(xyz);
}

console.log(xyz);
```
In the second code snippet, the program would display
```
1
2
3
4
5
5
```
because the program treats both versions of xyz as the same thing, and making changes to either one affects the other as well.
### Constants
Constants are declared using the `const` keyword. Constants are similar to variables, in that they hold a value as well. However, once a constant is declared, it's value cannot be changed. A variable's value *can* be changed after declaration.
Examples:
```javascript
var x = 5;
x = 10;
```
would work, whereas
```javascript
const y = 5;
y = 10
```
wouldn't work. Constants are useful if you have a particular value that's significant in the program, but doesn't change. For example,
```javascript
const seconds = 60; // the number of seconds in a minute
```
is better than
```javascript
var seconds = 60; // number of seconds in a minute
```
because the number of seconds in a minute doesn't change, so there's no reason for seconds to be changeable.
### Variable types
JavaScript has a variety of different variable types, but the important ones are:  
__Number:__ A number is exactly what it sounds like.  
__Bool:__ A boolean value can be one of two possible values-true, or false.  
__String:__ A string is a series of characters. Strings are enclosed by `"`. `"This is a string"` is an example of a string.  
__Null:__ A null type variable can only hold the value `null`.  
__Undefined:__ An undefined variable is a variable that exists, but doesn't have a type. Really it's more of a *lack* of a type than an actual type.  
__Array:__ An array is essentially a list of values, separated by commas. Array indexes start at 0, so to retrieve the fourth element of array `myArray`, one would use `myArray[3]` instead of `myArray[4]`.

### Why do variable types matter?
Variable typing is much more important in languages such as C or Go, but it's an important concept because, for example, `"2" + "2"` is `"22"`, whereas `2 + 2` is `4` because `"2"` is a string, and `2` is a number. Sometimes you'll need to tell JavaScript to __coerce__ a variable into a specific type so that you can do something with it. 
