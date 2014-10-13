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

* dualArg - mechanism to support operations that require two arguments.
* add - mechanism to add primitives and mechanisms.
* sub - mechanism to subtract primitives and mechanisms.
* mul - mechanism to multiply primitives and mechanisms.
* div - mechanism to divide primitives and mechanisms.

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

    m.add(1, 2).go;
    m.sub(6, -7).go;
    m.div(4, 2).go;
    m.mul(3, 1.5).go;

Add, Sub, Mul and Div primitives and mechanisms:

    m.add(m.sub(4, 5), 2).go;
    m.add(m.div(4, 5), m.mul(5, 6)).go;

Add (inject) any mechanism in the calculation. Let's write the result to the left side of the addition to the console.

    m.add(
      m.writeLn(
        m.div(10, 5)
      ),
      m.mul(5, 6)
    ).go;

would output:

    2

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