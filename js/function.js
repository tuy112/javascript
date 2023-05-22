// 1. function (함수)



// 2. add를 가지고 10과 20을 더한 값을 출력하기
let add = function (x, y) {
    return x + y;
};

let functionResult = add(10,20);
console.log(functionResult);

console.log("=================================")

// 3. scope, 전역함수, 지역함수
function printX() {
    let x = 10;
    console.log(x);
} // printX 함수 안에서만 유효함

// 4. 화살표 함수
let arrow = (a, b) => {
    return a + b;
}

let arrow2 = (a, b) => x + y;


console.log("=================================")

// 4. if문
