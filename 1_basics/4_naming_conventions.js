/**
 * Naming Conventions
 * 
 * 변수 이름 지을 때
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용할 수 있다.
 * 2) 특수기호는 언더스코어와 달러를 사용할 수 있다.
 * 3) 숫자로 이름을 시작할 수 없다.
 *    1Name, 2Hello
 * 4) 키워드는 변수명으로 사용할 수 없다.
 *    var var = 'var';
 */
let name = '김지훈';
var $jihun = '지훈';
const _jihun = '지훈';

console.log(name);
console.log($jihun);
console.log(_jihun);

// let 1name = 'no';
// let const = 'no';

/**
 * Naming Convention 2
 * 
 * 1) camelCase -> 대부분의 언어에서 많이 사용
 * 2) snake_case -> 파이썬같은 언어에서 사용
 * 3) PascalCase -> C# 마이크로소프트 계열의 언어에서 사용
 */
const myName = '김지훈';
const my_name = '김지훈';
console.log(myName);
console.log(my_name);