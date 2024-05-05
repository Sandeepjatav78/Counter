function getValue() {
    // var input = document.querySelector("#input");
    // var value = input.value;
    // console.log(value);
}

let count = document.querySelector(".count");
let plus = document.querySelector(".plus");
plus.addEventListener("click", function () {
    var input = document.querySelector("#input");
    var value = parseInt(input.value);
    count.innerText = parseInt(count.innerText) + value;
})

let min = document.querySelector(".min");
min.addEventListener("click", function () {
    var input = document.querySelector("#input");
    var value = parseInt(input.value);
    count.innerText = parseInt(count.innerText) - value;
})

function reset(){
    count.innerText=0
    // alert("hello")
}


