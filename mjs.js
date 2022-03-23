var x = window.innerWidth;
if(x>699){
    window.location.href="index.html";
}


addEventListener('resize', function(){
    if(window.innerWidth>699){
        window.location.href="something.html";
    }
})

//*************************************************** */
var mup = document.querySelector(".pimg");
window.onload = () =>{
    mup.classList.remove("mvd");
}
//***************************************************** */

let mvl = document.querySelector(".skillset");
window.addEventListener("scroll", appear);
function appear(){
    let windowheight= window.innerHeight;
    let textPosition = mvl.getBoundingClientRect().top;
    if(windowheight>textPosition){
        
        mvl.classList.remove("mvl");
    }else mvl.classList.add("mvl");
}

let mvr = document.querySelector(".skillD");
window.addEventListener("scroll", appear1);
function appear1(){
    let windowheight = window.innerHeight;
    let textPosition = mvr.getBoundingClientRect().top;
    if(textPosition<windowheight){
        
        mvr.classList.remove("mvr");
    }else mvr.classList.add("mvr");
}

//************************************************************************* */
let mvr1 = document.querySelector(".grad1");
window.addEventListener("scroll", appear2);
function appear2(){
    let windowheight = window.innerHeight;
    let textPosition = mvr1.getBoundingClientRect().top;
    if(windowheight>textPosition){
        
        mvr1.classList.remove("mvr1")
    }else mvr1.classList.add("mvr1");
}

let mvr2 = document.querySelector(".high1");
window.addEventListener("scroll", appear3);
function appear3(){
    let windowheight = window.innerHeight;
    let textPosition = mvr2.getBoundingClientRect().top;
    if(windowheight>textPosition){
        
        mvr2.classList.remove("mvr2")
    }else mvr2.classList.add("mvr2");
}

let mvr3 = document.querySelector(".sec1");
window.addEventListener("scroll", appear4);
function appear4(){
    let windowheight = window.innerHeight;
    let textPosition = mvr1.getBoundingClientRect().top;
    if(windowheight>textPosition){
        
        mvr3.classList.remove("mvr3")
    }else mvr3.classList.add("mvr3");
}

/**********************CCERTIFICATION AND DESCRIPTIONS********************************************************** */

let sainya = document.querySelector(".sainya");
window.addEventListener("scroll", sainyaD);
function sainyaD(){
    let windowheight = window.innerHeight;
    let textPosition = sainya.getBoundingClientRect().top;
    if(textPosition<windowheight){
        sainya.classList.remove("sainyaD");
    }else {
        sainya.classList.add("sainyaD");
    }
}

let nie = document.querySelector(".nie");
window.addEventListener("scroll", nieD);
function nieD(){
    let windowheight = window.innerHeight;
    let textPosition = nie.getBoundingClientRect().top;
    if(textPosition<windowheight){
        
        nie.classList.remove("nieD");
    }else {
        nie.classList.add("nieD");
    }
}

let cs = document.querySelector(".cs");
window.addEventListener("scroll", csD);
function csD(){
    let windowheight = window.innerHeight;
    let textPosition = cs.getBoundingClientRect().top;
    if(textPosition<windowheight){
        
        cs.classList.remove("csD");
    }else {
        cs.classList.add("csD");
    }
}

/************************************************************************************* */
