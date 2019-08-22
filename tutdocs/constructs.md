# Writing for Fuyuko
For `froggyhugger` / Docs v1.0.0
## Basic programming constructs:
#### Overarching ideas:
__Selection:__ selection is the name for when a program has multiple paths that it can take, and must chose one of those paths. `if` statements are an example of selection.
__Iteration:__ iteration is the name for when a program takes a chunk of code and repeatedly executes it until a certain condition is met. `while` loops and `for` loops are examples of iteration.

### 1. `if...else` statement:
Syntax:
```javascript
if (condition){
  // do thing 1
} else {
  // do thing 2
}
```
Explanation:
`if` statements are, in a sense, flow-through. If the condition in the parentheses is true, the program will perform thing 1, *but will not perform thing 2.* If the condition in the parentheses is false, the program will perform thing 2, *but will not perform thing 1.* An `if` statement doesn't necessarily need an `else` clause. the `else` clause is only used if you want to do thing 1 *or* thing 2, but not both. If you're okay with both thing 1 *and* thing 2 happening, you can use two separate `if` statements, like so:
```javascript
if (condition){
  // do thing 1
}
if (opposite or other condition){
  // do thing 2
}
```

More in-depth (aka confusing):
Think of a program as being like a tree branch. In a tradition program, execution of code starts from the top of the code file, and goes downward, line by line, like if you were going down a tree branch that has no forks, splits, etc. When the program reaches an `if...else` statement, the tree branch that you've been traveling down splits into two separate tree branches. The proogram can only follow one of these two branches, and it decides on which one to follow based on whether the condition part of `if (condition)` is true, or false.
### 2. `if...else if` statement:
Syntax:
```javascript
if (condition){
  // do thing 1
} else if (other condition){
  // do thing 2
} else {
  // do thing 3
}
```
Explanation:
This construct is useful if I have three things that can happen, and I only want one of them to happen. In reality, this is the same thing as:
```javascript
if (condition){
  // do thing 1
} else {
  if (other condition){
    // do thing 2
  } else {
    // do thing 3
  }
}
```
In fact, you can chain together as many `else if` statements as you want, like so:
```javascript
if (condition a){
  // do thing 1
} else if (condition b){
  // do thing 2
} else if (condition c){
  // do thing 3
} else if (condition d){
  // do thing 4
}
```
The above code snippet does the same thing as
```javascript
if (condition a){
  // do thing 1
} else {
  if (condition b){
    // do thing 2
  } else {
    if (condition c){
      // do thing 3
    } else {
      if (condition d){
        // do thing 4
      }
    }
  }
}
```

### 3. `switch` statement:
Syntax:
```javascript
switch(argument){
  case x:
    // do thing 1
    break;
  case y:
    // do thing 2
    break;
  default:
    // do thing 3
}
```
Explanation:
A `switch` statement takes a value as an argument, then checks to see if the value matches any `case`. Note: each `case` in a `switch` statement __must__ end with `break;`. Otherwise, if `argument` matches `case x`, the program will execute `case x`, `case y`, and `default`, instead of just `case x`.

The above `switch` statement is identical to the following:
```javascript
if (argument == x){
  // do thing 1
} else if (argument == y){
  // do thing 2
} else {
  // do thing 3
}
```

### 4. `while` loop:
Syntax:
```javascript
while (condition){
  // do thing 1
}
```
`while` loops are similar to `if` statements, but the difference between the two is that:
__a)__ Once the program flow reaches a `while` loop, it checks if `condition` is true, and if so, repeatedly does thing 1 *until* `condition` *is false.* An `if` statement only checks once whether or not `condition` is true, and only does "thing 1" once, whereas a `while` loop does thing 1, checks if `condition` is true. If so, the process is repeated, until `condition` is false.
__b)__ `while` loops don't have an `else` clause.

### 5. `for` loop:
Syntax:
```javascript
for (var variable_name = 0; variable_name > 10; variable_name++){
  // do thing 1
}
```
Explanation:
`for` loops are used to iterate over something. For example, the numbers 1-10 are iterable because I can count 1, 2, 3, 4... up to ten, and I know that I can get the next number in the series by adding one to the current number (1+1=2, 2+1=3, 3+1=4...). A basic `for` loop is broken up into 3 parts:
__1.__ A variable is declared using the `var` keyword, and is assigned a value. This variable keeps track of where the loop is in terms of iterating. In the above `for` loop, a variable named `variable_name` is created, and assigned a value of 0.
__2.__ The stop condition for the loop is given. In the above `for` loop, the loop stops when `variable_name` is greater than 10.
__3.__ The rule for iterating is given. In the above `for` loop, the loop is told to increase `variable_name` by one each time the program flow returns to the beginning of the `for` loop.

### 6. `for...in` loop:
Syntax:
```javascript
for (var item in object){
  // do thing one
}
```
Explanation:
If you have an object that can be iterated through (for example, an array), a fast way to iterate through it (look at entry 0, entry 1, entry 2...) is to use a `for...in` loop. This is essentially a specialized `for` loop.
