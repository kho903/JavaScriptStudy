/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

// Copy By Value
let original = '안녕하세요';
let clone = original;

console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요
console.log('============================');
clone += ' 안유진입니다.';
console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요 안유진입니다.
console.log('============================');

// Copy By Reference
let originalObj = {
    name : '안유진',
    group : '아이브'
}
let cloneObj = originalObj;

console.log(originalObj); // { name: '안유진', group: '아이브' }
console.log(cloneObj); // { name: '안유진', group: '아이브' }

console.log('============================');
originalObj['group'] = '아이즈원';
console.log(originalObj); // { name: '안유진', group: '아이즈원' }
console.log(cloneObj); // { name: '안유진', group: '아이즈원' }

console.log(originalObj === cloneObj); // true
console.log(original === clone); // false

originalObj = {
    name: '김지훈',
    group: '경기대'
};
cloneObj = {
    name: '김지훈',
    group: '경기대'
}
console.log(originalObj === cloneObj); // false

const yujin1 = {
    name : '안유진',
    group : '아이브'
}
const yujin2 = yujin1;
const yujin3 = {
    name : '안유진',
    group : '아이브'
}

console.log(yujin1 === yujin2); // true
console.log(yujin1 === yujin3); // false
console.log(yujin2 === yujin3); // false

/**
 * Spread Operator
 */
const yujin4 = {
    ...yujin3
}
console.log(yujin4);
console.log(yujin4 === yujin3); // false

const yujin5 = {
    year: 2003,
    ... yujin3,
}
console.log(yujin5);

const yujin6 = {
    name: 'yujin',
    ... yujin3,
}
console.log(yujin6); // name : '안유진' => 순서가 중요.


const yujin7 = {
    ... yujin3,
    name: 'yujin',
}
console.log(yujin7); // name : 'yujin' => 순서가 중요.

const numbers = [1,3,5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);
