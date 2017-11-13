date-clone
===
cloning date object as own method. `const copy = original.clone()`

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shisama/date-clone/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/date-clone.svg)](https://www.npmjs.com/package/date-clone)

## Install
```
npm install --save date-clone
```

## Parameter
| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| freeze  | <code>boolean</code> | true: return deep copy object<br>false: return shallow copy object|


## Usage
ES Modules:
```
import "date-clone";

const original = new Date();
const copy = original.clone();
```

CommonJS:
```
require("date-clone");

const original = new Date();
const copy = original.clone();
```

## Example
```
import "date-clone";

const original = new Date();
const copy = original.clone(); // deep copy!

console.log(original === copy); // false
console.log(original !== copy); // true
console.log(original.getTime() === copy.getTime()); // true
console.log(original.constructor === copy.constructor); // true

// set milliseconds on the original date object
original.setMilliseconds(original.getMilliseconds() - 1);
console.log(original.getTime() === copy.getTime()) // false
console.log(original.getTime() === copy.getTime() - 1) // true

const original2 = new Date();
const copy2 = original2.clone(false); // shallow copy!

console.log(original2 === copy2); // true
console.log(original2 !== copy2); // false
console.log(original2.getTime() === copy2.getTime()); // true
console.log(original2.constructor === copy2.constructor); // true

// set milliseconds on the original date object
original.setMilliseconds(original2.getMilliseconds() - 1);
console.log(original2.getTime() === copy2.getTime()) // true
console.log(original2.getTime() === copy2.getTime() - 1) // false
```
