/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembers);

// push() - array의 맨 끝에 데이터를 추가.
console.log(iveMembers.push('kim')); // 추가한 다음의 길이 반환
console.log(iveMembers);

console.log('=================================');
// pop() - 가장 마지막 데이터 반환 후 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('=================================');
// shift() - 가장 처음 데이터 반환 후 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('=================================');
// unshift() - 가장 처음에 데이터 추가 후 길이 반환
console.log(iveMembers.unshift('안유진')); // 7
console.log(iveMembers);

console.log('=================================');
// splice()
console.log(iveMembers.splice(0, 3)); // 1번 파라미터 인덱스부터 2번 파라미터 개수만큼 삭제 후 삭제한 데이터 반환
console.log(iveMembers);


iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembers);
// concat()
console.log(iveMembers.concat('kim')); // kim 포함된 배열을 새로 반환해줌
console.log(iveMembers); // 따라서 kim은 포함 안 됨. 원래 배열 변경 X

// slice()
console.log(iveMembers.slice(0, 3)); // 0번부터 3-1번 인덱스까지의 배열 리턴
console.log(iveMembers); // 원래 배열 변경 X

// spread operator
let iveMembers2 = [
    ...iveMembers
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers, // 2중 배열
]
console.log(iveMembers3);

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); // true

console.log([
    ...iveMembers,
] === iveMembers); // false

// join
console.log(iveMembers.join());
console.log(typeof iveMembers.join()); // String
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);
console.log(iveMembers.reverse());

let numbers = [
    1, 9, 7, 5, 3,
];
console.log(numbers);
// a, b를 비교했을 때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);
numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map()
console.log("====================");
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if (x === '안유진')
        return `아이브: ${x}`;
    else return x;
}));
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));
console.log(numbers.filter((x) => x % 2 == 0));
console.log(numbers.filter((x) => x % 2 == 1));

// find() -> 처음 찾은 한 개만 반환 (배열 X, 값)
console.log(numbers.find((x) => x % 2 == 0));

// findIndex() -> 해당되는 index
console.log(numbers.findIndex((x) => x % 2 == 0));

// reduce(a, b) -> a : 콜백함수, b : 초깃값
console.log(numbers.reduce((p, n) => p + n, 0)); // 25
