/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = '김지훈';
console.log(name);

var age = 28;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경 가능.
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '뉴진스2'; // const는 변경 불가.

/**
 * 선언과 할당
 * 
 * 1) 선언은 변수를 선언하는 것.
 * 2) 할당
 */
let friend;
console.log(friend); // undefined

// const friend2; // 'const' declarations must be initialized.ts(1155)
