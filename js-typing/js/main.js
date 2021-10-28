var txtElement = document.getElementById('txt');
var word = ["엔드게임", "인피니티 워", "에이지 오브 울트론"];

Function typeWriter(txtElement, words) {
this.txtElement = txtElement;
    this.words;
    
    //엔 -> 엔드 -> 엔드게 -> 엔드게임 -> 엔드게 . . . .
    
    this.txt = "";
    this.wordIndex = 0;
    this.isDeleting = false;
    
    this.type();    
    
}


new typeWriter(txtElement, words);






var words =["엔드게임", "인피니티 워", "에이지 오브 울트론"];

//엔
//엔드
//엔드게
//엔드게임
//엔드게
//엔드
//엔
//
//인
//인피








var arr = [10, 20, 30];
var index = 0;

// 10 -> 20 -> 30-> 10 -> 20-> 30-> 10 . . . . . .


// 0 % 3 = 0;
// 1 % 3 = 1;
// 2 % 3 = 2;
// 3 % 3 = 0;
// 4 % 3 = 1;
// 5 % 3 = 2;
// 6 % 3 = 0;
// 7 % 3 = 1;
// 8 % 3 = 2;

Function loop() {
    
    // 0
    var current = index % arr.length;
    console.log(arr[current]);
    index++
    
    
}

loop)();




















