const $ = document
let burgerMenuBtn = $.querySelector(".burger-menu")
let sidBar = $.querySelector("aside")
let bgCover = $.querySelector(".bg-cover")

burgerMenuBtn.addEventListener("click", () =>{
    sidBar.classList.add("d-block")
    bgCover.classList.add("d-block")
})

bgCover.addEventListener("click", () => {
    sidBar.classList.add("move-left")
    
    setTimeout(() => {
        sidBar.classList.remove("move-left")
        sidBar.classList.remove("d-block")
        bgCover.classList.remove("d-block")
    }, 1000);
})