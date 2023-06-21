/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

// console.log(name);
// var name = '김지훈';
// console.log(name);

// 위 코드는 아래와 같이 동작

// var name;
// console.log(name);
// name = '김지훈';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기함.
 */
/**
 * let, const는 var와 달리 Hoisting 현상을 막아줌.
 * 아래 코드는 에러 발생.
 */
// console.log(jihun);
// let jihun = '김지훈';
