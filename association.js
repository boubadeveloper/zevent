function openTab(x){
    let contents = document.querySelectorAll(".tab-content");
    let btns = document.querySelectorAll("button")
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
        btns[i].classList.remove("active")
    }
    // tous les contents ont display none
    contents[x].style.display= "flex";
    btns[x].classList.add("active")
}
openTab(0)