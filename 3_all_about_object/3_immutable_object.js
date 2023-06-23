/**
 * Immutable Object
 */
const yujin = {
    name : '안유진',
    year : 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yujin);

/**
 * Extensible
 */
console.log("============= Extensible =============");
console.log(Object.isExtensible(yujin)); // true
yujin['position'] = 'vocal';
console.log(yujin);

Object.preventExtensions(yujin);
console.log(Object.isExtensible(yujin)); // false

/**
 * Extensible이 false일 경우 추가 X. 삭제 O
 */
yujin['groupName'] = '아이브';
console.log(yujin); // 추가 안 됨

delete yujin['position'];
console.log(yujin); // 삭제는 가능

/**
 * Seal
 */
console.log("============= Seal =============");
const yujin2 = {
    name : '안유진',
    year : 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yujin2);
console.log(Object.isSealed(yujin2)); // false

Object.seal(yujin2);
console.log(Object.isSealed(yujin2)); // true

/**
 * Seal일 경우 추가 X. 삭제 X -> 오류는 나지 않음
 */
yujin2['groupName'] = '아이브';
console.log(yujin2); // 추가 X

delete yujin2['name'];
console.log(yujin2); // 삭제 X

Object.defineProperty(yujin2, 'name', {
    value: '유진',
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'name')); // 변경 O

console.log(Object.getOwnPropertyDescriptor(yujin2, 'name'));

Object.defineProperty(yujin2, 'name', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(yujin2, 'name'));
// -> configurable은 false가 됨.

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만듦.
 */
console.log("============= Freezed =============");
const yujin3 = {
    name : '안유진',
    year : 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};

console.log(Object.isFrozen(yujin3)); // false

Object.freeze(yujin3);
console.log(Object.isFrozen(yujin3)); // true

yujin3['groupName'] = '아이브';
console.log(yujin3);

delete yujin3['name'];
console.log(yujin3);

// Object.defineProperty(yujin3, 'name', {
//     value: '유진'
// });
console.log(Object.getOwnPropertyDescriptor(yujin3, 'name'));
// enumerable 제외하고 모두 false
// 값 추가, 삭제, 변경 and 프로퍼티 애트리뷰트도 변경 불가(에러)

const yujin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    }
};
Object.freeze(yujin4);
console.log(Object.isFrozen(yujin4)); // true
console.log(Object.isFrozen(yujin4['wonYoung'])); // false
// 상위 object를 freeze 했어도 하위 object는 freeze X
// Extensible, Seal도 마찬가지
