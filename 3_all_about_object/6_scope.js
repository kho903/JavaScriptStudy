/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
    console.log(numberOne);
}
// levelOne(); // 20;

function levelOne2() {
    var numberOne = 40;
    console.log(numberOne);
}
// levelOne2(); // 40
// console.log(numberOne); // 20

function levelOne3() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99;
        console.log(`levelTwo numberTwo : ${numberTwo}`); // 99
        console.log(`levelTwo numberOne : ${numberOne}`); // 40
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`); // 40
}
levelOne3();
console.log(numberOne);
// console.log(numberTwo); // ReferenceError: numberTwo is not defined

/**
 * JS -> Lexical Scope
 */
var numberThree = 3;
function functionOne() {
    var numberThree = 100;

    functionTwo();
}

function  functionTwo() {
    console.log(numberThree);
}

functionOne(); // 3 -> global scope

var i = 999;

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`i in global scope : ${i}`);

i = 999;
// block level scope
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만들어 냄.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어 냄.
 */
