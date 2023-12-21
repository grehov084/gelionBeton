let body, showModal, closeModal, modalOverlay, modalElem, goUp, tel, scrollValue = 0, header, el;
closeModal = document.querySelector(".modal__close");
modalOverlay = document.querySelector(".modal");
body = document.querySelector('body');
goUp = document.querySelector(".site-up__link");
header = document.querySelector(".site-header__logo");
el = document.getElementById(goUp.getAttribute("data-link"));
jQuery(function($){
    $("#tel").mask("+7 (999) 999-9999", {placeholder: "X"});
});
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
goUp.addEventListener("click", () => {
    el.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
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
    if(window.pageYOffset != 0 && !goUp.parentNode.hasAttribute("style")){
        fadeIn(goUp.parentNode, 250);
    }
    if(window.pageYOffset == 0){
        fadeOut(goUp.parentNode, 500);
        goUp.parentNode.removeAttribute("style");
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
