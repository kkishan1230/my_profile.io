var ppi = document.querySelector("#pp");
window.onload = (event) => {
    ppi.classList.remove("move-right");
} 



//************************************************** */
let item2 = document.querySelector(".item2");
window.addEventListener("scroll" , appear);

function appear(){
    let textPosition = item2.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        let x = document.querySelector(".item2");
        let y = document.querySelector(".item4")
        x.classList.remove("pleft");
        y.classList.remove("pright");
    }else { 
        x.classList.add("pleft");
        y.classList.add("pright");
 }
}
//****************************************************** */
let gup = document.querySelector("#godown");
window.addEventListener("scroll" , appearup);

function appearup(){
    let textPosition = gup.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        gup.classList.remove("goup");
    }
}
//************************************************************ */

let cd1 = document.querySelector(".cd1");
window.addEventListener("scroll", appear1);

function appear1(){
    let textPosition = cd1.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        let x = document.querySelector(".cd1");
        x.classList.remove("ml1");
    }
}
//**************************************************************** */

let cd2 = document.querySelector(".cd2");
window.addEventListener("scroll", appear2);

function appear2(){
    let textPosition = cd2.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        let x = document.querySelector(".cd2");
        x.classList.remove("mr");
    }
}

//**************************************************************** */

let cd3 = document.querySelector(".cd3");
window.addEventListener("scroll", appear3);

function appear3(){
    let textPosition = cd3.getBoundingClientRect().top;
    let windowheight = window.innerHeight;
    if(windowheight>textPosition){
        let x = document.querySelector(".cd3");
        x.classList.remove("ml2");
    }
}
