/**
 * Getter and Setter
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    
    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear() {
        return `${this.name} - ${this.year}`;
    }

    set setName(name) {
        this.name = name;
    }

    set setYear(year) {
        this.year = year;
    }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
console.log(yujin.nameAndYear);
yujin.setName = '유진';
console.log(yujin);

class IdolModel2 {
    #name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yujin2 = new IdolModel2('안유진', 2003);
console.log(yujin2);
console.log(yujin2.name);

yujin2.name = '유진';
console.log(yujin2.name);
