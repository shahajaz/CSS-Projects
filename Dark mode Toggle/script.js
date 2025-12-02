const body = document.querySelector("body");
const btn_container = document.querySelector(".btn_container");

btn_container.addEventListener("click", ()=>{
    body.classList.toggle("darkmode");
});
