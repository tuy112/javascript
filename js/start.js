// 1. variable
let start = "hello World";
console.log(start);

// 2. data type
// ※ java : String a = "abc"
let num = 10;
console.log(num);
console.log(typeof num);  // typeof : 데이터타입 확인 가능

let num2 = 3.14;
console.log(typeof num2);

console.log("============================================");

let str = "hello world";
console.log(str.length); // 문자열 길이 확인하기

let str1 = "hello";
let str2 = "world";
let result = str1.concat(str2); // hello + world 합치기
console.log(result);

let str3 = "hello world";
console.log(str3.substr(7,5)); // 문자열을 짜름

let str4 = "hello world";
console.log(str.search("world")); // world가 시작되는 지점을 찾음

console.log("============================================");

// 3. data type - boolean type
let bool1 = true;
let bool2 = false;
console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);

// 4. undefined : 값이 할당안됨
//    null : 값이 존재하지 않음을 "명시적"으로 나타냄 (개발자가 일부러 만듦)
let x;
console.log(x);

let y = null;
console.log(y);

// 5. object (객체)
let person = {
    name : 'choi',
    age : 20,
    isMarried : true
}
console.log(person);
console.log(typeof person);

// 6. array (배열)
let number = [1,2,3,4,5];
console.log(number);

console.log("============================================");

// 7. cast (형변환) : 형태를 바꾼다 -> 암시적, 명시적 형변환
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1); // 문자열이 우선 시 됨


let result2 = "2" + "3";
console.log(result2);

console.log(Boolean(0));

console.log("============================================");

// 8. 연산자
console.log(2 + 3);
console.log(2 / 3); // 나누기
console.log(2 % 3); // 나머지 값

let z = 10;
z += 5;
console.log(z); // 10 + 5 = 15