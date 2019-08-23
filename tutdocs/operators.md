# Writing Commands For Fuyuko
For `froggyhugger` / Docs v1.0.0
## Operators:
### Comparisons
__value1 == value2:__ The `==` operator checks if value1 equals value2 (if they're the same number or string), and returns true if so. Otherwise it returns false. The `!=` operator does the opposite.  
__value1 === value2:__ The `===` operator checks whether value1 and value2 are equal *and* are the same variable type. True if so, otherwise false.  
__number1 < number2:__ The `<` operator checks whether (true) or not (false) number1 is less than number2.  The `>` operator does the opposite.  
__number1 <= number2:__ The `<=` operator checks whether (true) or not (false) number1 is less than *or equal to* number2. The `>=` operator does the opposite.  
Example:
```javascript
if (2 > 3){
  console.log("Yep");
} else {
  console.log("Nope");
}
```
would display
```
Yep
```
#### Compound Boolean expressions
__&& :__ The `&&` operator can chain together any number of comparison operator expressions. This operator stands for __AND__, and returns true only if the statement on its left *and* the statement on its right are true. For example, `(5 > 4 && 4 > 3)` means *5 is greater than 4 AND 4 is greater than 3.* This statement would evaluate to `true` because 5 is, in fact greater than 4, and 4 is, in fact, greater than 3.  
__|| :__ The `||` operator also chains together any number of comparison operator expressions, however, `||` stands for __OR__,and returns true if either the statement to its left *or* the statement to its right is true. If both statements are true, then this operator evaluates to `true`. For example: `(6 == 5 || 7 == 8 || 5 != 5)` means *6 is equal to 5 OR 7 is equal to 8 OR 5 is not equal to 5.* This statement would evaluate to `false` because 6 *isn't* equal to 5, 7 *isn't* equal to 8, and 5 *is* equal to 5.  
__! :__ The `!` operator is used on a single statement (for example `!(6 > 5)`), or a series of statements inside a set of parentheses (for example, `!(6 > 5 && 7 > 6)`). The `!` operator stands for __NOT__, and it inverts the boolean value of the expression it is placed in front of. This means that if `(expression a)` would evaluate to `true`, then `!(expression a)` would evaluate to `false`, and if `(expression b)` would evaluate to `false`, `!(expression b)` would evaluate to `true`.
### Variable Operators
__value1 + value2:__ If value1 and value2 are strings, they are put together (concatenated). If value1 and value2 are numbers, the `+` functions as a normal arithmetic operator. Value is lost if not assigned to a variable like so: `var myNum = 1 + 2;`. 
__number1 - number2:__ Arithmetic operator for numbers. New value is lost if not assigned to a variable like so: `var myNum = 1 - 3;`. 
__number1++ :__ The `++` adds one to number1, and assigns the new value to number1. `--` does the same thing, except it decreases number1 by 1.
```javascript
if (can_read && !(lost)){
  console.log("Nice!");
}
