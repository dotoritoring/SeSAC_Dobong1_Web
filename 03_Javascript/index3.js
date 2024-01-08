/*var
- 재할당, 재선언 모두 가능o
- 재선언: 바람직x(중복선언)
*/
var name = '홍길동'
var name = '홍길동2'
console.log(name)

/* let
- 재선언x
- 재할당o
- 초기화 작업 필요x (최초 선언시, 값을 할당하지 않아도 ㅇㅋ)
*/
let c;
c = 10; // 재할당
// let c; --------> 오류 (재선언 불가)
console.log(c)

/* const
- 재선언, 재할당 xxx
- 변하지 않는 값을 변수에 저장할 때 사용
- 최초 선언시, 반드시 초기화 필요(반드시 값을 할당해야 함)
*/
// const b; ---> 오류(초기화를 하지 않아서-)
const b = 10
// b = 11 --------> 오류(재할당 불가)

let q1 = 3;
// q1 = q1-3
console.log(q1) //3

// 비교 연산자
// (참고) = 은 대입 연산자임
/* 1. == : 값만 비교하는 연산자*/
console.log('==연산자')
console.log(1==1)
console.log(1==2)
console.log(1!=2)
console.log(1!=1)
console.log('1'===1)
console.log('1'!=1)

// 자바스크립트의 이상한 특징..
console.log(''=='0') // false
console.log(false == '0') //true
console.log('0' == 0) //true
console.log('' == 0) //true
console.log(false == '0') //true

console.log(undefined == null) //true

/*2. 비교 연산자 ===: 값과 data type까지 모두 비교*/
console.log('=== 연산자')
console.log('1'===1) // false
console.log(undefined ===null) // false
console.log(''===0) // false
console.log(1==1) // true

// 크기 비교
console.log(2>1)
console.log(1>=1)
console.log(2<1)
console.log(1<=0)

// 산술 연산자
console.log('------산술 연산자-----')
console.log(1+2)
console.log(1-2)
console.log(1*2)
console.log(7/2)
console.log(7%2)
console.log(7**2)

// 논리 연산자
console.log('------논리 연산자-----')
console.log(!true)
console.log(!!true)
console.log(!!false)
console.log(true&&true)
console.log(true && true && true && false) // false
console.log(false && true && true && false) // false => 위와 결과값이 동일하지만, false가 맨 앞에 쓰여 뒤에 논리를 따질 필요도 없이 결과값은 false이므로, 위의 코드보다 성능이 더 좋음

// ||(OR 연산자는 true일 확률이 높은 조건을 앞쪽에 배치)
console.log(true||true) // true
console.log(true||false) // true
console.log(false||false) // false

console.log(!(2>1))
console.log(2>1 && -2<1)
console.log((2>1 && -2<1)|| 2>5) // true

// 문자와 변수를 같이 쓰는 방법
const str1 = 'allie'
const str2 = '서울'
//allie는 서울에 삽니다.
/*1. + 연산자 이용(문자열일 때는 문자열을 이어줌) */
console.log(str1+'는 ' + str2 + '에 삽니다.')
console.log(str1, '는', str2, '에 삽니다.') // , 사이에 띄어쓰기가 포함되어 나옴
console.log(`${str1}는 ${str2}에 삽니다.`)

str3 = `${str1}는 ${str2}에 삽니다.`
str4 = str1+'는 ' + str2 + '에 삽니다.'
// str5 = str1, '는', str2, '에 삽니다.' =>  불가능
console.log(str3)