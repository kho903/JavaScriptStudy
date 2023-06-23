/**
 * Class Keyword
 * 
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기
 * 위한 변수와 메소드(함수)를 정의하는 일종의 틀이다.
 */
class IdolModel {
    name;
    year;

    // constructor - 생성자
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() {
        return '안녕하세요 저는 ' + this.name + '입니다.';
    }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonyoung = new IdolModel('원영', 2004);
console.log(wonyoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const esoe = new IdolModel('이서', 2007);
console.log(esoe);

console.log(yujin.name);
console.log(yujin.year);
console.log(yujin.sayName());
console.log(gaeul.sayName());
console.log(yujin.sayName());
console.log(ray.sayName());
console.log(wonyoung.sayName());
console.log(liz.sayName());
console.log(esoe.sayName());

console.log(typeof IdolModel); // function
console.log(typeof yujin); // object
