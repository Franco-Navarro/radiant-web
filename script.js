var article__section = document.querySelectorAll(".article__section");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var i = 0;

next.addEventListener("click", function next(){
    article__section[i+1].classList.replace("next","view");
    i++;
    article__section[i-1].classList.replace("view", "prev");
})


prev.addEventListener("click", function prev(){
    article__section[i-1].classList.replace("prev","view");
    i--;
    article__section[i+1].classList.replace("view", "next");

})
