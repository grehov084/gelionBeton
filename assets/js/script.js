let body, showModal, closeModal, modalOverlay, modalElem, goUp, tel, scrollValue = 0, header, i = 0;
closeModal = document.querySelector(".modal__close");
modalOverlay = document.querySelector(".modal");
body = document.querySelector('body');
goUp = document.querySelector(".site__up");
header = document.querySelector(".site-header__logo");

function scroll(){
    window.scrollTo({
        top: 0
    });
}
scroll();
goUp.addEventListener("click", function(e){
    //e.preventDefault();
    scroll();
    console.log(i);
    i++;
});

jQuery(function($){
    $("#tel").mask("+7 (999) 999-9999", {placeholder: "X"});
});
console.log(header);
if(window.innerWidth > 1024){
    showModal = document.querySelector(".description-action");
}
else{
    showModal = document.querySelector(".header-mobile__button");
}
window.addEventListener("resize", ()=>{
    if(window.innerWidth > 1024){
        showModal = document.querySelector(".description-action");
    }
    else{
        showModal = document.querySelector(".header-mobile__button");
    }
});
function fadeIn(el, timeout, display){
    el.style.opacity = 0;
    el.style.display = display || 'flex';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
    el.style.opacity = 1;
    }, 10);
  };
function fadeOut(el, timeout){
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    body.style.cssText = "";
    if(el.classList.contains("modal")){
        setTimeout(() => {
            el.style.display = 'none';
          }, timeout);
    }
};
window.addEventListener("scroll", ()=>{
    modalOverlay.style.top = window.pageYOffset + "px";
    if(window.pageYOffset != 0 && !goUp.hasAttribute("style")){
        fadeIn(goUp, 250);
    }
    if(window.pageYOffset == 0){
        fadeOut(goUp, 500);
        goUp.removeAttribute("style");
    }
});

if(scrollValue != 0){
    modalOverlay.style.top = scrollValue + "px";
}
showModal.addEventListener("click", ()=>{
    modalElem = document.querySelector(".modal");
    body.style.overflow = "hidden";
    fadeIn(modalElem, 500)
    modalElem.classList.add("show");
});
closeModal.addEventListener("click", ()=>{
    modalElem = document.querySelector(".modal");
    fadeOut(modalElem, 500);
    modalElem.classList.remove("show");
    body.removeAttribute("style");
});
document.addEventListener("keydown", function(e){
    if(e.key == "Escape"){
        modalElem = document.querySelector(".modal");
        fadeOut(modalElem, 500);
        modalElem.classList.remove("show");
        body.removeAttribute("style");
    }
});
document.addEventListener("click", function(e){
    if(e.target.tagName == "svg"){
        e.preventDefault;
        window.scrollTo(header);
    }
    else if(e.target.tagName == "path"){
        e.preventDefault;
        window.scrollTo(header);
    }
});