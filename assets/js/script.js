let body, showModal, closeModal, modalOverlay, modalElem, scrollValue = 0;
showModal = document.querySelector(".description-action");
closeModal = document.querySelector(".modal__close");
modalOverlay = document.querySelector(".modal");
body = document.querySelector('body');
window.addEventListener("scroll", ()=>{
    modalOverlay.style.top = window.pageYOffset + "px";
});
if(scrollValue != 0){
    modalOverlay.style.top = scrollValue + "px";
}
showModal.addEventListener("click", ()=>{
    modalElem = document.querySelector(".modal");
    modalElem.classList.add("show");
});
closeModal.addEventListener("click", ()=>{
    modalElem = document.querySelector(".modal");
    modalElem.classList.remove("show");
});