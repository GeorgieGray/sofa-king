const carousel=document.querySelector("#carousel")
const dot0=document.querySelector("#carousel-dot0")
const dot1=document.querySelector("#carousel-dot1")
const dot2=document.querySelector("#carousel-dot2")

dot1.addEventListener("click", function () {
    const items = carousel.querySelectorAll(".carousel-item")

    for(const item of items){
        item.classList.remove("active")
    } 

    items[1].classList.add("active")

})
dot0.addEventListener("click", function () {
    const items = carousel.querySelectorAll(".carousel-item")

    for(const item of items){
        item.classList.remove("active")
    } 
    
    items[0].classList.add("active")

})
dot2.addEventListener("click", function () {
    const items = carousel.querySelectorAll(".carousel-item")

    for(const item of items){
        item.classList.remove("active")
    } 
    
    items[2].classList.add("active")

})
