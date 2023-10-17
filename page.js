var firstheading = document.getElementById("minu")
var secondtheading = document.getElementById("sec")
var thirdheading = document.getElementById("misec")
var hour = document.getElementById("hour")
var d = 0 ;
var a = 0;
var b = 0 ;
var c = 0 ;
var hello ;

function timer (){
    c++
     thirdheading.innerHTML = c
    if( c >= 100){
        b++
        secondtheading.innerHTML = b
        c = 0
    }else if(b>= 60 ){
        a++
        firstheading.innerHTML = a
        b = 0
    }
    else if(a >= 60){
        d++
        hour.innerHTML = d
        a = 0  

    }

}

function go() {
    
    if (!hello) {
        hello = setInterval(timer, 10)
    }
}
function ruk() {
    clearInterval(hello)
    hello = null; 
}

function re() {
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    thirdheading.innerHTML = c;
    secondtheading.innerHTML = b;
    firstheading.innerHTML = a;
    hour.innerHTML = d;
    ruk();
    hello = null; 
}