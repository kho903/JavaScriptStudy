/**
 * Prototype
 */
const testObj = {};

// __proto__ : 모든 객체에 존재하는 프로퍼티
// class의 상속에서 부모 클래스에 해당되는 값.
console.log(testObj.__proto__); // [Object: null prototype] {}

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);

console.dir(IdolModel.prototype, {
    showHidden: true,
});

console.log(IdolModel.prototype.constructor);
// circular reference
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yujin = new IdolModel('안유진', 2003);
console.log(yujin.__proto__);
console.log(yujin.__proto__ === IdolModel.prototype); // true
console.log(testObj.__proto__ === Object.prototype); // true

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true

console.log(yujin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    this.name = name,
    this.year = year,

    this.sayHello = function() {
        return `${this.name}이 인사를 합니다.`;
    }
};

const yujin2 = new IdolModel2('안유진', 2003);
const wonyoung2 = new IdolModel2('장원영', 2002);
console.log(yujin2.sayHello());
console.log(wonyoung2.sayHello());
console.log(yujin2.sayHello === wonyoung2.sayHello); // false

console.log(yujin2.hasOwnProperty('sayHello')); // true

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function() {
    return `${this.name}이 인사를 합니다.`;
}

const yujin3 = new IdolModel3('안유진', 2003);
const wonyoung3 = new IdolModel3('장원영', 2004);
console.log(yujin3.sayHello());
console.log(wonyoung3.sayHello());
console.log(yujin3.sayHello === wonyoung3.sayHello); // true

console.log(yujin3.hasOwnProperty('sayHello')); // false
// true일 경우 객체 내에 선언된 프로퍼티, 아닐 경우 상속 받은 프로퍼티

IdolModel3.sayStaticHello = function() {
    return '안녕하세요 저는 static method 입니다.';
}
console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */

function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return '안녕하세요 저는 인스턴스 메서드입니다!';
    }
}

IdolModel4.prototype.sayHello = function() {
    return '안녕하세요. 저는 prototype 메서드입니다.';
}

const yujin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 셰도잉 - class에서 overriding
console.log(yujin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
    this.name = name,
    this.year = year;
}
IdolModel.prototype.sayHello = function() {
    return `${this.name} 인사를 합니다`;
}
function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name} 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.dance());

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel); // false
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // false
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

FemaleIdolModel.prototype = IdolModel.prototype;

console.log("================================")
const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

