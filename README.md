[mech-library-link]: https://github.com/mechanismsjs/mech-library "Clone to easily create new mechanism libraries"
[mech-web-link]: https://github.com/mechanismsjs/mech-web "Web centric DOM mechanisms"
[mech-core-link]: https://github.com/mechanismsjs/mech-core "Core mechanisms"
[mech-math-link]: https://github.com/mechanismsjs/mech-math "Math mechanisms"
[mech-guid-link]: https://github.com/mechanismsjs/mech-guid "Mechanisms for guids"
[mech-home-link]: https://github.com/mechanisms/mech "Home repository for mechanisms"
# mech-math

Mechanisms are plugins for open source.

See [Mechanisms Home][mech-home-link] for more information.

* [mech-core][mech-core-link] - Core mechanisms.
* [mech-math][mech-math-link] - Math mechanisms. This project. 
* [mech-web][mech-web-link] - Web centric DOM mechanisms.
* [mech-guid][mech-guid-link] - Guid mechanisms.
* [mech-library][mech-library-link] - Clone and start making your own mechanism libraries.

# Documentation

## Supported Mechanisms in this Library

* **dualArg** - mechanism to support operations that require two arguments.
* **map** - "Calls a defined callback function (policy) on each element of an array, and returns an array that contains the results".
* **add** - mechanism to add primitives and mechanisms in the number domain. Same as + operator in Javascript for numerics.
* **addS** - mechanism to add primitives and mechanisms in the string domain. Same as + operator in Javascript for strings.
* **sub** - mechanism to subtract primitives and mechanisms. Same as - operator in Javascript.
* **mul** - mechanism to multiply primitives and mechanisms. Same as * operator in Javascript.
* **div** - mechanism to divide primitives and mechanisms. Same as / operator in Javascript.
* **modulus** - mechanism to modulus primitives and mechanisms. Same as % operator in Javascript.

### Arithmetic Operators

The ++ and -- operator are currently not supported by mechanisms.

### String Operators

See addS to add strings.

## dualArg Mechanism

Base mechanism for mechanisms that require two arguments (such as add, sub, mul, div, etc.).

Provides a l (left) and r (right) argument.

## Add, sub, mul and div

add, sub, mul and div will run the appropriate operation on the two arguments provided.

l,r (left and right) can be:

* a primitive value
  * "hello"
  * 0
* another mechanism or policy
  * m.str("hello")
  * m.num(3)
  * m.writeLn(5)

### Examples

Add, Sub, Mul and Div two primitives:

```javascript
m.add(1, 2).go;
m.sub(6, -7).go;
m.div(4, 2).go;
m.mul(3, 1.5).go;
```

Add, Sub, Mul and Div primitives and mechanisms:

```javascript
m.add(m.sub(4, 5), 2).go;
m.add(m.div(4, 5), m.mul(5, 6)).go;
```

Add (inject) any mechanism in the calculation. Let's write the result to the left side of the addition to the console.

```javascript
m.add(
  m.writeLn(
    m.div(10, 5)
  ),
  m.mul(5, 6)
).go;
```

would output:

    2
    
    
## Map

Traditionally, mapping in javascript is done as follows:

```javascript

// javascript traditional
[1,2,3,4,5].map(
   function(n) {
     return n + 2;
 });
```

This is the "push-pull" approach to programming: we "push" data into the algorithm and pull a result.

Mechanisms use a "pull" approach to programming: an algorithm "pulls" the data into itself. Let's see what that looks like:

```javascript
// javascript mechanisms
m.map(
  m.add(2, m.emitArr([1,2,3,4,5]))
 ).go;
```

In his case, map returns an array by calling add until there is nothing left to emit.

The resulting array is:

```javascript
[3,4,5,6,7]
```

Basically, our map simply calls the emitter until undefined is reached or we reach a maximum number of elements. We have a maximum number of elements because an emitter can emit an infinite range of values such as:

```javascript
m.emitRange(1,Infinity,23);
```

How about two emitters of different lengths

```javascript
m.map(
   m.add(
      m.emitRange(1,4,1),
      m.emitArr([1,2,3,4,5])
   )
).go;
```

The resulting array is:

```javascript
[2,4,6,8]
```

The algorithm can use strings:

```javascript
m.map(
   m.addS(
      m.emitRange(["hello","goodbye","begin","end"]),
      "ay"
   )
).go;
```

The resulting array is:

```javascript
["helloay","goodbyeay","beginay","enday"]
```

## Using In Your Projects

Change directory to your node project.

    $ npm install mech-math --save

## Development

## Get Involved!

There are **a lot** of core mechanisms to add. Many of them can be created in a few hours including in-depth tests. Clone [mech-library][mech-library-link] to get started!

### Setup

Install:

    $ npm install
    
Continuous test:

    $ gulp

Test:

    $ gulp mocha

Web Testing:

    $ gulp webtests

OR

Right mouse click on /testsweb/index.html and open in browser.