/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 
 *    - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 액세서 프로퍼티 
 *    - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때
 *      호출되는 함수로 구성된 프로퍼티. 예) getter/setter
 */
 const yujin = {
    name: '안유진',
    year: 2003,
 };

/**
 * { value: '안유진', writable: true, enumerable: true, configurable: true }
 * { value: 2003, writable: true, enumerable: true, configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(yujin, 'name'));

/**
 * 1) value
 *    - 실제 프로퍼티의 값
 * 2) writeable
 *    - 값을 수정할 수 있는지 여부. false로 설정시 프로퍼티 값 수정 불가.
 * 3) enumerable
 *    - 열거가 가능한지 여부. for...in 룹 등 사용가능시 true 반환.
 * 4) confingurable
 *    - 프로퍼티 어트리뷰트의 재정의가 가증한지 여부 판단
 *    - false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지됨.
 *    - 단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능.
 */
console.log(Object.getOwnPropertyDescriptor(yujin, 'year'));

console.log(Object.getOwnPropertyDescriptors(yujin));

const yujin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },
    
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};

console.log(yujin2);
console.log(yujin2.age);
yujin2.age = 21;
console.log(yujin2.age);
console.log(yujin2.year);

console.log(Object.getOwnPropertyDescriptor(yujin2, 'age'));

// yujin2['height'] = 172;
// console.log(yujin2);
// console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

Object.defineProperty(yujin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(yujin2);
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

/**
 * Writable
 */
yujin2.height = 180;
console.log(yujin2);

Object.defineProperty(yujin2, 'height', {
    writable: false,
})
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

console.log('=====================');
yujin2.height = 172;
console.log(yujin2); // 변경 X

/**
 * Enumerable
 */
console.log(Object.keys(yujin2));
for (let key in yujin2) {
    console.log(key);
}

Object.defineProperty(yujin2, 'name', {
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(yujin2, 'name'));
console.log(Object.keys(yujin2)); // name 출력 X.
for (let key in yujin2) {
    console.log(key);
}

console.log(yujin2);
console.log(yujin2.name);

/**
 * Configurable
 */
// Object.defineProperty(yujin2, 'height', {
//     configurable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));
// 재정의 불가 -> Cannot redefine property: height
// Object.defineProperty(yujin2, 'height', {
//     enumerable: false
// })

Object.defineProperty(yujin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));
Object.defineProperty(yujin2, 'height', {
    value: 172
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

Object.defineProperty(yujin2, 'height', {
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

// 에러
// Object.defineProperty(yujin2, 'height', {
//     writable: true
// });
// console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));
