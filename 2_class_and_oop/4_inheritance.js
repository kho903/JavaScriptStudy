/**
 * Inheritance
 * 
 * 상속은 객체들간의 관계를 구축하는 방법.
 * 슈퍼 클래스, 또는 부모 클래스 등의 기존의 클래스로부터
 * 속성과 동작을 상속받을 수 있음.
 */
class IdolModel {
    name;
    year;
    
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance() {
        return '여자 아이돌이 춤을 춥니다';
    }
}

class MaleIdolModel extends IdolModel {
    sing() {
        return '남자 아이돌이 춤을 춥니다';
    }
}

const yujin = new FemaleIdolModel('안유진', 2003);
console.log(yujin);

const jimin = new MaleIdolModel('지민', 1995);
console.log(jimin);

console.log(yujin.dance());
console.log(yujin.name);

console.log(jimin.sing());
console.log(jimin.year);

// true
console.log(yujin instanceof IdolModel);
console.log(yujin instanceof FemaleIdolModel);
console.log(jimin instanceof IdolModel);
console.log(jimin instanceof MaleIdolModel);

console.log('==============');
// false
console.log(yujin instanceof MaleIdolModel);
console.log(jimin instanceof FemaleIdolModel);
