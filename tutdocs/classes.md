# Writing Commands For Fuyuko
For `froggyhugger` / Docs v1.0.0
## JavaScript Classes:
For a good explanation of JavaScript classes, check the [Mozilla Docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
### What is a class?
A class is a template (like a cookie cutter). You can make any number of cookies (instances) from a class definition. Classes have their own properties and methods, and each __instance__ of a class has a copy of these instances and methods. A class definition looks like so:
```javascript
class ClassName{
  constructor(arg1, arg2, arg3){
    this.a = arg1;
    this.d = arg2;
    this.x = arg3; 
  }
  method1(arg1, arg2) {
    // some code
  }
  method2() {
    // some code
  }
}
```
and an instance of a class is created like so:
```javascript
var myObject = new ClassName(9, "hello", "blue");
```
#### Explanation
A class definition is similar to a function, except that a class is like a container for different functions and values. The `constructor` is automatically executed whenever a new instance of the object is created, and it takes any number of arguments. Once `var myObject = new ClassName(..., ..., ...);` is run, `myObject` now has three variables (a, d, and x) tied to it, and has two methods (method1 and method2) tied to it. A JavaScript class method is a function, and is defined the same way as a regular function, but without the `function` keyword in front of it. To access variable `d`, one would use `myObject.d`, and to access `method1`, one would use `myObject.method1`.
### Why are classes useful?
Consider the following scenario:  
You are creating a video game. Each enemy character in the game must have a strength value and a hit point value, and must be able to attack and defend. One way that the code for this could be written is
```javascript
class Enemy{
  constructor(strength, hitPoints){
    this.strength = strength;
    this.hp = hitPoints;
  }
  attack() {
    // some code
  }
  defend () {
    // some code
  }
}
```
Now, when a new enemy appears, attacks, then takes 10 damage, the code would look like so:
```javascript
var newEnemy = new Enemy(15, 40); // new enemy appears

newEnemy.attack(); // enemy attacks

newEnemy.hp = newEnemy.hp - 10; // enemy takes 10 damage
```
