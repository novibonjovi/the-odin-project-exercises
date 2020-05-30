/*
fundamentals part 1 from the odin project
https://www.theodinproject.com/courses/web-development-101/lessons/fundamentals-part-1?ref=lnav

javascript practice
https://javascript.info/operators
*/

// unary operation
let x = 1;
x = -x;
console.log(`unary, -1: ${x}`);

// binary operation
x = 1;
let y = 3;
console.log(`binary, 3 - 2: ${y - x}`);

// remainder %
console.log(`remainder 1, of 5 divided by 2: ${5 % 2}`);
console.log(`remainder 1, of 8 divided by 3: ${8 % 3}`);

// exponantiation **
console.log(`2 to the power of 2, 2 ** 2: ${2 ** 2}`);
console.log(`2 to the power of 3, 2 * 2 * 2 , 2 ** 3: ${2 ** 3}`);
console.log(`square root of 2, 2 ** (1/2): ${2 ** (1 / 2)}`);
console.log(`qubic root of 2, 2 ** (1/3): ${2 ** (1 / 3)}`);

// string concatenation with binary +
let s = 'my' + 'string';
console.log(`'my' + 'string': ${s}`);
console.log(
  `if one operand is a string numbers are converted to strings, '2' + 1: ${
    '2' + 1
  }`
);
console.log(
  `but 2 + 2 + '1' = 41 not 221, because first 2 + 2 = 4 then 4 + '1': ${
    2 + 2 + '1'
  }`
);
console.log(
  `operands except + will convert strings to numbers, 6 - '2': ${6 - '2'}`
);

let a = '2';
console.log(
  "+ before a string converts it to a number, +'2' + 2 = 4 and '2' + 2 = 22"
);
console.log(`+'2' + 2: ${+a + 2}`);
console.log(`'2' + 2: ${a + 2}`);

/* type conversion practice

1. "" + 1 + 0         '10'
2. "" - 1 + 0         -1
3. true + false       1
4. 6 / "3"            2
5. "2" * "3"          6
6. 4 + 5 + "px"       9px
8. "$" + 4 + 5        $45
9. "4" - 2            2
10. "4px" - 2         NaN
11. 7 / 0             Infinity
12. "  -9  " + 5      ' -9 5'
13. "  -9  " - 5      -14
14. null + 1          1
15. undefined + 1     NaN
16. " \t \n" - 2      -2
*/

// fix the addition
let num1 = prompt('First number?', 1);
let num2 = prompt('Second number?', 2);
console.log(Number(num1) + Number(num2));

// Variables
// working with vatiables practice
let name;
let admin;
name = 'John';
admin = name;
console.log(admin);

let ourPlanetName = 'Earth';
let currentVisitorName = 'Name';
