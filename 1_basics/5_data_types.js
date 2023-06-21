/**
 * Data Types
 * 
 * 여섯 개의 Primitive Type과
 * 한 개의 오브젝트 타입이 있다.
 * 
 * 1) number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *      Function
 *      Array
 *      Object
 */

// 1. number
const age = 32;
const temparature = -10;
const pi = 3.14;

console.log(typeof(age));
console.log(typeof(temparature));
console.log(typeof(pi));
console.log('------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

/**
 * String 타입
 */
const code = '코드';
console.log(code);
console.log(typeof code);

const ive = "'아이브' 안유진";
console.log(ive);

const kim = '"김"지훈';
console.log(kim);

/**
 * Template Literal
 * 
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 된다.
 */
const iveYujin = '아이브\n안유진';
console.log(iveYujin);

const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);

const backSlash = '아이브\\장원영';
console.log(backSlash);

const smallQutoation = '아이브\'장원영';
console.log(smallQutoation);

// Template Literal
const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
console.log('------------------');

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는 것은 지양해야 한다.
 */
let noInit;
console.log(noInit); // undefined
console.log(typeof noInit); // undefined

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때
 * 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init); // object

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); // false

/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져 있다.
 * key:value
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색'
}

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary); // object

/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입.
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 시작
 * 1씩 올라감
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[1]);
console.log(iveMembersArray[2]);

iveMembersArray[0] = 'kim';
console.log(iveMembersArray[0]);
console.log(typeof iveMembersArray); // object

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시함.
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 "추론"한다.
 * JS -> dynamic typing
 */

