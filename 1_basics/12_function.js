/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 을 스트링으로 변환해서
 * 반환 받고 싶다면?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());
console.log('===========');
/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}
// calculate();

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 함.
 * 
 * 실제 입력하는 값은 argument라고 함.
 */
calculate(4);
calculate(5);

function multiply(x, y) {
    console.log(x * y);
}
multiply(2, 4);

function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2, 4);
multiply(2); // 20 , defualt parameter
console.log('===========');
/**
 * 반환받기
 * return 받기
 */
function multiplyReturn(x, y) {
    return x * y;
}

const result1 = multiplyReturn(2, 4);
console.log(result1);

const result2 = multiplyReturn(4, 5);
console.log(result2);

console.log('===========');
/**
 * Arrow 함수
 */
const multiplyArrow = (x, y) => {
    return x * y;
}
console.log(multiplyArrow(3, 4));

const multiplyArrow2 = (x, y) => x * y;
console.log(multiplyArrow2(5, 4));

const mulArrow = (x) => x * 2;
console.log(mulArrow(2));

const mulArrow2 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(mulArrow2(2)(5)(7));

function multi(x) {
    return function(y) {
        return function(z) {
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}

console.log(multi(3)(4)(5));

const multi2 = function(x, y) {
    return x * y;
}
console.log(multi2(4, 5));

const multi3 = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}

console.log('--------------------');
console.log(multi3(4, 5, 6));

const multiplyAll = function(...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoke function
(function(x, y) {
    console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object);