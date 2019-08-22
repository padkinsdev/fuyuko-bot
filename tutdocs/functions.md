# Writing Commands For Fuyuko
For `froggyhugger` / Docs v1.0.0
## Functions
### What's a function?
A function is essentially a bunch of lines of code collected together.
### Syntax
Functions are defined using the `function` keyword, like so:
```javascript
function funcName(argOne, argTwo, argThree){
  // lines of code
}
```
#### Explanation
When you declare a function, you give it a name (in this case, `funcName`). You then make a list of names representing all of the variable values that the function will need in order to run properly (called arguments, or parameters). This list can be any number of names long (yes, including 0 names long), with each name separated from the others by a comma. Finally, inside the `{}` brackets goes the body of the function. Whenever the function is called, these lines of code will be executed.  
For example, let's say I want to print out the name of this GitHub repository to the console using a function:
```javascript
function repoName(){
  console.log("fuyuko-bot");
}
```
Calling
```javascript
repoName();
```
would display
```
fuyuko-bot
```
Now, let's suppose I want to create a function that takes a number as input, adds two to that number, and prints out the result:
```javascript
function addTwo(myNumber){
  myNumber = myNumber + 2;
  console.log(myNumber);
}
```
Calling
```javascript
addTwo(7);
```
would display
```
9
```
### The `return` command
Sometimes you want a function to give you back some data. In such a case, the `return` command is used. It's important to note that the function will not do anything after returning a value. As an example, let's say I want to create a function that adds `"-bot"` to the end of any string I give it:
```javascript
function addToName(botName){
  botName = botName + "-bot";
  return botName;
  console.log(botName); // This will NEVER occur, because the function stops once it returns a value
}

var name = "fuyuko";

var newName = addToName(name); // assigns the value that addToName returns to the variable newName

console.log(newName);
```
The last line of this program will print out
```
fuyuko-bot
```
### Why are functions useful?
Functions are useful because they can greatly decrease the length of the source code that you write. This is because you will sometimes need to reuse the same chunk of code for different data. Instead of repeatedly copy/paste-ing five or so lines of codes that find the standard deviation of a data set, and thereby making my source code repetitive and overly long, I can create a function
```javascript
function findStdDev(dataSet){
  // find the standard deviation
  return standardDev;
}
```
and call the function on each data set that I want to find the standard deviation of, like so:
```javascript
findStdDev([2,2,3,4,3,2,5,3,2,1,9]);
findStdDev([5,7,23,68,543,656]);
```
Functions are also useful because they tell anyone who reads the source code what a specific section of the code does.
