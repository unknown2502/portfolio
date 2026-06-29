// Welcome Message
console.log("Welcome to Ajay Portfolio");

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Contact Form

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully!");

form.reset();

});

}

// Scroll Animation

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-350;

if(top>offset){

section.style.opacity="1";

section.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="1s";

});