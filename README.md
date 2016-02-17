## myPackage


My first attempt at building a simple npm package.

This package uses underscore to generate html content and render it as index.html right in your current folder.

you can install it directly from this repository.


## How to install 


you must have [node.js](https://nodejs.org/en/) installed.

then simply run `npm install ItamarGronich/myPackage --save`.


## how to use it

simply require it from the node_Modules of your project.
and use the very simple API 

```javascript

var myPackage = require('myPackage');

// stores strings of the desired html in temp variables
var header = myPackage.h1('this will be your header');
var paragraph = myPackage.p('this will be your paragraph');
var list = myPackage.ul(['and','these','will','be','list items']);

// this will generate an index.html file in your current folder.
var generateHTML = myPackage.html(header, paragraph, list);

```
---
 
### API : 

header: 
takes a string and returns a string of a h1 and the text inside.
```javascript
myPackage.header('string');
```


paragraph: 
takes a string and returns a string of a p and the text inside.
```javascript
myPackage.p('string');
```

list: 
takes an array of strings and returns a string of a ul and li's representing each of the array elements.
```javascript
myPackage.ul([Array]);
```
html:
takes any number of strings that represent html content as arguments and generates a index.html file containing them.
<br />

Returns a string containing the entire html.

```javascript
myPackage.html('h1 string', 'p string', 'ul string');
```