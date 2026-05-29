// NAVBAR ONSCROLL CHANGES

const header = document.querySelector("#header");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 60) {
        header.style.top = "-2px";
        header.style.background = "rgba(0, 38, 255, 0.08)";
        header.style.backdropFilter = "blur(30px)";
        header.style.borderBottom = "1px solid rgba(3, 17, 17, 0.09)";
        header.style.transition = "0.3s ease-in-out";
    }else {
        header.style.backdropFilter = "blur(0px)";
        header.style.borderBottom = "none";
        header.style.transition = "0.3s ease-in-out";
        header.style.background = "none";
        header.style.top = "0";
    }
});

// WHATSAPP BTN VISIBLE ON SCROLL
const whatsappIcon = document.getElementById("whatsapp-icon");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        whatsappIcon.classList.add("visible");
    } else {
        whatsappIcon.classList.remove("visible");
    }
});

// SCROLL TO TOP BTN

const scrollTop = document.getElementById("arrow");

window.addEventListener("scroll", ()=>{
     if(window.scrollY > 2000) {
        scrollTop.classList.add("show");
     }else{
        scrollTop.classList.remove("show");
     }
});


scrollTop.addEventListener("click", ()=>{
    window.scrollTo({
       top: 0,
       behavior: 'smooth'
    });
});

