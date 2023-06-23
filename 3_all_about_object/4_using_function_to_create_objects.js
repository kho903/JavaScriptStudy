/**
 * Using Function to create objects
 */
function IdolModel(name, year) {
    // console.log(this);
    // console.log(new.target);

    if (!new.target) {
        return new IdolModel(name, year);
    }
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
};

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
// console.log(yujin.dance());
const yujin2 = IdolModel('안유진', 2003);
console.log(yujin2);
/**
 *   new 안쓸시 undefined 
 *  if (!new.target) {
        return new IdolModel(name, year);
    }
 *  추가로 예방 가능. 
 **/
// console.log(global.name); // global에 name, year이 들어가게됨.


const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
}

// arrow 함수에서는 생성자 사용 불가.
// const yujin3 = new IdolModelArrow('안유진', 2003);
