/**
 * Async theory
 */
// function longWork() {
//     const now = new Date();

//     const milliseconds = now.getMilliseconds();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while (new Date().getTime < afterTwoSeconds) {

//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World');

function longWork() {
    setTimeout(() => {
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');
