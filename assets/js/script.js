let body, showModal, closeModal, modalOverlay, modalElem, goUp, scrollValue = 0;
closeModal = document.querySelector(".modal__close");
modalOverlay = document.querySelector(".modal");
body = document.querySelector('body');
goUp = document.querySelector(".site__up");
if(window.innerWidth > 1024){
    showModal = document.querySelector(".description-action");
}
else{
    showModal = document.querySelector(".header-mobile__button");
}
window.addEventListener("resize", ()=>{
    console.log(window.innerWidth);
    if(window.innerWidth > 1024){
        showModal = document.querySelector(".description-action");
    }
    else{
        showModal = document.querySelector(".header-mobile__button");
    }
    console.log(showModal);
});
console.log(showModal);
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