[mech-library-link]: https://github.com/mechanismsjs/mech-library "Clone to easily create new mechanism libraries"
[mech-web-link]: https://github.com/mechanismsjs/mech-web "Web centric DOM Mechanisms"
[mech-core-link]: https://github.com/mechanismsjs/mech-core "Core Mechanisms"
[mech-math-link]: https://github.com/mechanismsjs/mech-math "Math Mechanisms"
[mech-guid-link]: https://github.com/mechanismsjs/mech-guid "Mechanisms for guids"
[mech-home-link]: https://github.com/mechanisms/mech "Home repository for mechanisms"
# mech-math

Mechanisms are plugins for open source.

See [Mechanisms Home][mech-home-link] for more information and other libraries.

# Documentation

## Supported Mechanisms in this Library

* *[add](#basic-ops-mechanism)* - add primitives and mechanisms in the number domain. Same as + operator in Javascript for numerics.
* *[addS](#string-mechanism)* - add primitives and mechanisms in the string domain. Same as + operator in Javascript for strings.
* *[div](#basic-ops-mechanism)* - divide primitives and mechanisms. Same as / operator in Javascript.
* *[dualArg](#dualarg-mechanism)* - mechanism to support operations that require two arguments.
* *[eqlNum](#eqlnum-eqlstr-mechanism)* - check's for strict (===) equality of two numeric values (non-deep equals).
* *[eqlStr](#eqlnum-eqlstr-mechanism)* - check's for strict (===) equality of two string values (non-deep equals).
* *[join](#join-mechanism)* - Joins an array separated by an optional token.
* *[max](#min-max-mechanism)* - mechanism to find maximum value in an array. Same as Math.max(a, b, ..., n) function in Javascript.
* *[min](#min-max-mechanism)* - mechanism to find minimum value in an array. Same as Math.min(a, b, ..., n) function in Javascript.
* *[modulus](#basic-ops-mechanism)* - mechanism to modulus primitives and mechanisms. Same as % operator in Javascript.
* *[mul](#basic-ops-mechanism)* - mechanism to multiply primitives and mechanisms. Same as * operator in Javascript.
* *[sub](#basic-ops-mechanism)* - mechanism to subtract primitives and mechanisms. Same as - operator in Javascript.
* *[pow](#power-mechanism)* - raises a base to an exponent power. Same as Math.pow(base,power) function in Javascript.

### <a name="arithmetic-mechanism"></a> Arithmetic Operators

The ++ and -- operator are currently not supported by mechanisms.

### <a name="string-mechanism"></a> String Operators

See addS to add strings.

## <a name="dualarg-mechanism"></a> dualArg Mechanism

Base mechanism for mechanisms that require two arguments (such as add, sub, mul, div, etc.).

Provides a l (left) and r (right) argument.

## <a name="eqlnum-eqlstr-mechanism"></a> eqlNum and eqlStr Mechanism

eqlNum and eqlStr use string equality (===) fo two numeric or string values.

l,r (left and right) can be:

* a primitive value
  * "hello"
  * 0
* another mechanism or policy
  * m.str("hello")
  * m.num(3)
  * m.writeLn(5)

### Examples

```javascript
m.eqlNum(2, 2).go; // true
m.eqlNum(6, -7).go; // false
m.eqlNum("4", "2").go; // false
m.eqlNum("3", "3").go; // true
m.eqlNum(NaN, NaN).go; // false (WARNING: may change this to true in the future)
```

```javascript
m.eqlStr(2, 2).go; // true
m.eqlStr(6, -7).go; // false
m.eqlStr("4", "2").go; // false
m.eqlStr("3", "3").go; // true
```

```javascript
m.eqlStr(m.num(4), m.num(4)).go; // true
m.eqlStr(m.str("4"), m.str("not equal")).go; // false
```

## <a name="basic-ops-mechanism"></a> Add, sub, mul, div and modulus

add, sub, mul, div and modulus will run the appropriate operation on the two arguments provided.

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

## <a name="min-max-mechanism"></a> Min and Max Mechanisms

Min and max return the minimum/maximum value from a parameter list. Here is an example:

```javascript
m.min(3,5,12,11).go; // 3
m.max(3,5,12,11).go; // 11
```

We can also pass a mechanism as a parameter like:

```javascript
m.min(3,m.max(3,5,4),12,11).go; // still 3
```

We don't support min or max of arrays so we can't do this: yet. TODO: Implement this.


```javascript
// NOT SUPPORTED YET
m.min([3, m.max(3,5,4), 12, 11]).go; // still 3
```

## <a name="join-mechanism"></a> Join Mechanism

Join lets you join an array. You can pass a mechanism to join but it must return an array.


```javascript
m.join([3,4,5]).go; // 3,4,5
m.join([3,4,5]," : ").go; // 3 : 4 : 5
m.join(m.loop(m.emitFromArr([1,2,3,5]),4)," : ").go; // 3 : 4 : 5
```

## <a name="power-mechanism"></a> Power Mechanism

Raises a value to a given power.

```javascript
m.pow(2,3).go; // 2^3 = 8
m.pow(2, m.pow(3, 4)).goNum; // 2^3^4 = 2.4178516392292583e+24
m.pow(2, m.pow(3, 4)).goStr; // (2 ^ (3 ^ 4))
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
