/*var countDownDate=new Date("Sep 19, 2021 11:20:00 ").getTime(); dem nguoc theo ngay */
var flashSaleSecond = 7200;
var boughtCourseNumber = 0;
var paddingZero = function (timeUnit) {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit;
};
let countdownInterval;

let setCountDownFlashSale = function (second) {
    if (second === 0) {
        clearInterval(countdownInterval);
    }
    /*var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;*/

    var hours = Math.floor(second / 3600);
    var minutes = Math.floor((second % 3600) / 60);
    var seconds = second - hours * 3600 - minutes * 60;
    /*var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);*/

    document.getElementById('hour').innerHTML = paddingZero(hours);
    document.getElementById('minute').innerHTML = paddingZero(minutes);
    document.getElementById('second').innerHTML = paddingZero(seconds);
};
countdownInterval = setInterval(function () {
    setCountDownFlashSale(flashSaleSecond--);
}, 1000);

// add buy cource-card
let addToCard = function(event) {
    event.target.style.display = "none";
    document.getElementById('bought-number').innerHTML = ++boughtCourseNumber;
};

// validate form 
let validateForm = function() {
    let arr = ['fullname', 'phone', 'email', 'age'];
    let input;
    let inputValue;
    for(let i = 0; i< arr.length; i++) {
        input = document.getElementById(arr[i]);
        inputValue = input.value;
        if(!inputValue) {
            input.style.borderColor = 'red';
        }
    }
  
};

// validate input 
let validateInput = function(id) {
    let input = document.getElementById(id);
    let inputValue = input.value;
    if(!inputValue) {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'black';
    }
}







