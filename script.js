let width = screen.width;
window.onscroll = function(ev) {
    let current_height = window.scrollY + window.innerHeight; // Height where you are right now
    let overlay = document.getElementById(`GOUP`);
    if(current_height >= 1700){
        overlay.classList.add("hidden");
    }else{
        overlay.classList.remove("hidden");
    }
};



let heart_btn = document.querySelectorAll(".heart");
let blurr_js = document.querySelectorAll(".blurred-pic");

heart_btn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (btn.style.color == "red") {
            btn.style.color = "#1e3050";
            blurr_js[index].classList.remove("appear");
        } else {
            btn.style.color = "red";
            blurr_js[index].classList.add("appear");
        }
    });
});





