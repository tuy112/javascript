// 1. if문
let x = 10;
    
if ( x > 0 ) { 
    console.log("x는 정수입니다.");
}

// 2. if ~ else
if ( x > 0 ) {
    console.log("x는 양수입니다.");
}else {
    console.log("x는 음수입니다.");
};

// 3. else
function total() {
    let x = 5;

    if (x<0) {
        console.log("0보다 작음");
    }else if (x >= 0 && x < 10) {
        console.log("중간..!");
    }else {
        console.log("10이상 값");
    }
}
total();

console.log("=====================================");

// 4. switch
let fruit = "사과";

switch (fruit) {
    case "사과":
    console.log("사입니다");
    break;
    case "바나나":
    console.log("바입니다");
    break;
    case "포도":
    console.log("포입니다");
    break;
    default:
    console.log("아무 값도 입력되지 않았습니다..");
    break;
}

console.log("=====================================");

function overlap() {
    // ※ 조건문의 중첩 : 많이 쓰는 건 안 좋음 why? 코드의 가독성이 떨어지게 됌..
    let age = 17;
    let gender = "여성";

    // 미성년자 구분
    if (age >= 18) {
        // console.log("성인");
        if (gender === "여성") {
            console.log("성인여성입니다");
        }else {
            console.log("남성입니다");
        }
    }else {
        // console.log("삐빅, 미성년입니다");
        if (gender === "여성") {
            console.log("삐빅.., 미성년 여성입니다");
        }else {
            console.log("삐삑.., 미성년 남성입니다");
        }
    }
}
overlap();


console.log("=====================================");

// ※ 삼항 연산자와 단축평가
function three() {
    let y;
    let z = y || 20;

    console.log( "z : " + z);
}
three();

console.log("=====================================");

// 생성자 함수
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
let person1 = new Person("kim", 30, "남자");
let person2 = new Person("Lee", 25, "여자");
console.log(person1, person2);

// 배열
let flower = ['장미', '개나리', '해바라기'];
let number = new Array(5);

console.log(flower);
console.log(number.length);
console.log(flower[1]);

flower.push('진달래');
console.log("추가 : " + flower);

flower.shift('장미');
console.log('삭제 : ' + flower);

flower.unshift('아카시아');
console.log('맨 앞 아카시아 추가 : ' + flower);

flower.splice(1, 1, '아카시아');
console.log('중간에 추가 : ' + flower);

// 콜백함수 : 매개변수 안에 함수를 넣는 것
function array2() {
    let numbers = [1,2,3,4,5];
    let newNumbers = numbers.map(function(item){
        return item * 2;
    })

    numbers.forEach(function(item){
        console.log("item입니다 : " + item); // forEach : number 배열 값이 하나 씩 찍힘..
    });

    console.log(newNumbers); // item * 2를 한 값 
}

// filter
function array3() {
    let numbers = [4,1,5,4,5];
    
    let filterNum = numbers.filter(function(item){
        return item == 5; // 5인 것만 출력해라..!
    });
    console.log(filterNum);
}

// find
function array4() {
    let numbers = [4,1,5,4,5];

    let result = numbers.find(function(item){
        return item > 3;
    });
    console.log(result);
}

array2();
array3();
array4();

console.log("==========================================");

// 5. for문 : for (초기값; 조건식; 증감식) {}
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("==========================================");

function array5() {
    const arr = ["one","two","three","four","five"];
    for ( let i = 0; i < arr.length; i++ ) {
        // console.log(i);
        console.log(arr[i]);
    };
}
array5();

console.log("==========================================");

// 6. while문
let i = 0;
while (i < 10) {
    i++;
    
    if (i === 5) {
        break;
    }
    console.log(i);
}

/*
// do ~ while
function dowhile() {
    let i = 0;

    do {
        console.log(i);
    } while (i < 10);
}
dowhile();
*/