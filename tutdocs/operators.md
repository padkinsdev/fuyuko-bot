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
### Variable Operators
__value1 + value2:__ If value1 and value2 are strings, they are put together (concatenated). If value1 and value2 are numbers, the `+` functions as a normal arithmetic operator. Value is lost if not assigned to a variable like so: `var myNum = 1 + 2;`. 
__number1 - number2:__ Arithmetic operator for numbers. New value is lost if not assigned to a variable like so: `var myNum = 1 - 3;`. 
__number1++ :__ The `++` adds one to number1, and assigns the new value to number1. `--` does the same thing, except it decreases number1 by 1.
