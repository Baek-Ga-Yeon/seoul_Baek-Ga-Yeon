// 클래스 (생성자 함수)
// 객체지향 프로그래밍 (OOP)

var superMan = {
    name: "슈퍼맨"
    age : 30,
    gender: "남성"
    skills ["레이저빔", "공중부양", "파워"]
}

var spiderMan = {
    name: "스파이더맨"
    age : 18,
    gender: "남성"
    skills ["거미줄", "벽타기", "스파이더센서"]
}

var blackWidow = {
    name: "블랙위도우"
    age : 34,
    gender: "여성"
    skills ["격투", "암살", "잠입"]
}


// 생성자 함수
Function Heroes (name, age) {
    this.name = name;
    this.age = age;

}


// 인스턴스

var superMan; = new Heroes('슈퍼맨', 30);
var blackWidow; = new Heroes('블랙위도우', 34);

console.log(superMan);
console.log(blackWidow);


Function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
 
    this.fullName = Function() {
        console.log(this.firstName + " " + this.lastName );
    }
}

var kim = new person("Inkweon", "Kim");
var park = new person("David", "Park");

console.log(kim);
console.log(park);

kim.fullName();
park.fullName();


// 프로토 타입

var kim = new person("Inkweon", "Kim");
var park = new person("David", "Park");

console.log(kim);
console.log(park);

kim.fullName();
park.fullName();



// __proto__


var arr1 = [];
var arr2 = new Array();

var str1 = "Hello";
var str2 = new String("Nice");


var func1 = Function() {
    
}




/*
if(a > b) {
    console.log("a는 b보다 크다.");
} else {
    console.log("a는 b보다 작다.")
}
*/




/*

if(a > b) {
    console.log("a는 b보다 크다.");
} else if(b > c) {
    console.log("b는 c보다 크다.");
} else if(a < c) {
    console.log("a는 c보다 작다.");
} else if(b < c) {
    console.log("b는 c보다 작다.");
} else {
    console.log("모든 조건을 만족하지 않는다.");
}

*/    



// comic 박스를 생성한 상태
// 변수선언
//var comic;

// comic 박스 안에 원피스 데이터를 할당한 상태
// 변수 초기화
//comic = "원피스";

//console.log(comic);




//var apple = "사과";

/*
var a;
var b;
var c;
*/


// 변수 동시 선언
//var a, b, c;

//변수 동시 초기화


/*
var d = 10;
var e = 20;
var f = 30;
*/


// var d = 20, e = 20, f = 30;




// 모든 변수는 선언과 동시에 undefined



//var computer;
//console.log(computer);



/*
var house;
house = "집";
console.log(house);

var house;
house = "아파트";
console.log(house);
*/




/*
var house;
console.log(house);

// undefined -> 집
house = "집"
console.log(house);
*/


// 캐멀 케이스

//var mathScoreStudent = 10;


// 스네이크 케이스
// var math_score_student = 10;


// 주의점
// var math-score-student = 100;

// var _math;
// var $math;


// var apple10;
// var 10apple;



// var w;





// 데이터 타입
// answkduf (String)





//var msg1 = "Hello World";
//var msg2 = 'Wecome';


//console.log(msg1);
//console.log(msg2);

// var msg3 = "Nice to meet you';";



// She is girl
// She's girl
//var msg4 = "She's girl";
//var msg5 = 'She\'s girl';




//console.log(msg4);
//console.log(msg5);






// 숫자 (Number)


/*
var num1 = 10;
var num2 = -10;
var num3 = 3.14;
var num4 = -3.14;


console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);


console.log(num1 + num2);
console.log(num1 + num4);
*/





// 연산자
// 숫자 사칙연산
//var a = 20;
//var a = 10;




//console.log(str1 + str2);
//console.log(str1 - str2);
//console.log(str1 * str2);
//console.log(str1 / str2);
//console.log(str1 % str2);




//var firstName = "Inkweon";
//var lastName = "Kim";





//console.log(firstName + "     " +lastName);


// answkduf (String)




//var msg1 = "Hello World";
//var msg2 = 'Wecome';


//console.log(msg1);
//console.log(msg2);

// var msg3 = "Nice to meet you';";



// She is girl
// She's girl
//var msg4 = "She's girl";
//var msg5 = 'She\'s girl';




//console.log(msg4);
//console.log(msg5);






// ++, -- 연산자
//var mum10 = 10;




//num10 = num10 - 1;
//console.log(num10);
// console.log(--num10); // 8
// console.log(--num10); // 9




//console.log(++num10);
//console.log(++num10);



//console.log(--num10);
//console.log(num10);


 



// 템플릿 리터럴

// ``, "", ''



//var name = "기발자";

console.log("내 이름은" + " " + name + "입니다.");
console.log(`내 이름은 ${name} 입니다.`);





document.querySelectorAll('.btn').forEach(Function (elemnet, elemnt. addEventListener('click', function(e) {
    e.preventDefault();
    
    if(e.target.classList.contains('prevBtn'))
        if(i===0) {
            i = arr.length;
        }
        i--;
    document.getElementById('img').sre = arr[i].img;
    document.getElementById('name').textContent = arr;
    document.getElementById('txt').textContent = arr;
    
 }
if(e.target.classList.contains('prevBtn'))
        if(i===0) {
            i = arr.length;
        }
        i--;
    document.getElementById('img').sre = arr[i].img;
    document.getElementById('name').textContent = arr;
    document.getElementById('txt').textContent = arr;
    


