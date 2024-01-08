//console.log('test') // 따옴표가 없을 경우, 변수로 인식

// 1. string(문자열)
/*  - 텍스트 정보
    - 숫자, 특수문자도 따옴표 안에 있다면 문자열
    - 따옴표 안에 따옴표가 있는 경우
        "안에 '작은 따옴표'가 있어요"
        '안에 "큰 따옴표"가 있어요'
*/

let myName = "화영"
let number1 = '128'
console.log(myName)
console.log(number1)

// 2. number(숫자)
let number2 = 128
let opacity = 0.7
console.log(number2)
console.log(opacity)

// NaN(not a number)
console.log('apple'-5)

// 3. boolean
// true, false
let checked = true
let isShow = false
console.log(checked, isShow)

// 4. undefined
// 값도 없고 타입도 지정되어 있지 않은 상태
// console.log(undef)

let empty= null
console.log(empty)

// 5. 배열(array)
let fruits = ["orange", "pineapple", "strawberry"]
console.log(fruits[2])

let data = [22, '22', false]
console.log(data[0])
console.log(data[1])

// 2차원 배열
const korean = [
    ["가", "나", "다"],
    ["라", "마", "바"],
    ["사", "아", "자"]
]

console.log(korean[0]) // 배열 ["가", "나", "다"]
console.log(korean[0][1]) // 원소 하나 '나'

const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];

// 아이스크림 출력
console.log(letters[3][0], letters[1][3], letters[0][1], letters[0][3], letters[2][2])


const nums = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
]

// 8 뽑기
console.log(nums[1][0][1])

/* object*/
// 배열은 순서가 있지만, object는 순서x 키-값 형태로 저장
// 데이터에 접근시 key이름을 이용해서 접근
//{키1: 값1}

let cat = {
    name:'나비',
    age:2,
    isCute:true,
    mew: function(){
        return '냐옹'
    }
}

// 점 표기법 
console.log(cat.name)
console.log(cat.age)
console.log(cat.isCute)
console.log(cat.mew())
cat.like = 'tuna'
cat.age = 3
console.log(cat)

// 대괄호 표기법
let dog = {
    name:'coco',
    isPoodle:true,
    age:3,
    sibling:['max', 'lucy']
}

console.log(dog.name)
console.log(dog["name"]) // 반드시 키값이 "키값" 이처럼, 따옴표 안에 들어가야 함
console.log(dog['age'])
console.log(dog["sibling"][1])

// 실습
let hy = {
    name:'hwayoung',
    birth:'97.05.03',
    hobby:'game'
}

// 데이터 타입을 알아보는 함수: typeof
console.log(typeof null) //object
console.log(typeof true) //boolean



// let mathScore1 = prompt("수학 점수를 입력 하세요");
// let engScore1 = prompt("영어 점수를 입력 하세요");
// let mathNumber = Number(mathScore1)
// let engNumber = Number(engScore1)
// // let avg = (mathScore + engScore) / 2;   // 자바스크립트는 자동 형변환이 된다.
// let avg = (mathNumber + engNumber) / 2;
// console.log(avg);

// console.log(typeof mathScore1) // string
// console.log(typeof mathNumber) // number
// console.log(typeof "----------------")
// console.log(typeof true)
// console.log(typeof [])
// console.log(typeof {})
// console.log(typeof NaN)
// console.log(typeof null)
// console.log(typeof undefined)

// 형 변환
// 1. string 타입으로 변경
console.log('--------------------')
let str1 = true; // boolean
let str2 = 123; // number
let str3 = null; // null

console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))

// 2. numer 타입으로 변경
let n1 = true; // true -> 1
let n2 = false; // false -> 0
let n3 = 123;
let n4 = '123.9';

console.log(typeof Number(n1))
console.log(typeof Number(n2))
console.log(typeof Number(n3))
console.log(typeof Number(n4))
console.log(parseInt(n4)) //123 
console.log(typeof parseInt(n4)) // 소수점은 버리고 정수형으로 변환 


// 실습1
console.log(typeof 10 + " isn't " + typeof "hy" + " data type")
console.log("typeof를 boolean이나 null에 사용하면, "+ typeof [] + "결과를 얻을 수 있습니다.")

// 실습2
let mathScore = "77"
let engScore = "88"
let avgScore = (Number(mathScore)+Number(engScore))/2
console.log(avgScore)

