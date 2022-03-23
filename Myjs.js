var x = window.innerWidth;
if(x<400){
    window.location.href="/mobile.html";
}
addEventListener('resize', function(){
    if(window.innerWidth<400){
        window.location.href="/mobile.html";
    }
})


var ppi = document.querySelector(".c5");
window.onload = (event) => {
    ppi.classList.remove("moveright");
} 




//************************************************** */
let item2 = document.querySelector(".item2");
let item4 = document.querySelector(".item4");
window.addEventListener("scroll" , appear);

function appear(){
    let textPosition = item2.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        item2.classList.remove("pleft");
        item4.classList.remove("pright");
    }else { 
        item2.classList.add("pleft");
        item4.classList.add("pright");
 }
}
//****************************************************** */
let gup = document.querySelector(".section2");
window.addEventListener("scroll" , appearup);

function appearup(){
    let textPosition = gup.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        gup.classList.remove("godown");
    }
    else {
        gup.classList.add("godown");
    }
}
//************************************************************ */

let cd1 = document.querySelector(".cd1");
window.addEventListener("scroll", appear1);

function appear1(){
    let textPosition = cd1.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        
        cd1.classList.remove("ml1");
    }else cd1.classList.add("ml1");
}
//**************************************************************** */

let cd2 = document.querySelector(".cd2");
window.addEventListener("scroll", appear2);

function appear2(){
    let textPosition = cd2.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        
        cd2.classList.remove("mr");
    }else cd2.classList.add("mr");
}

//**************************************************************** */

let cd3 = document.querySelector(".cd3");
window.addEventListener("scroll", appear3);

function appear3(){
    let textPosition = cd3.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        cd3.classList.remove("ml2");
    }else cd3.classList.add("ml2");
}
