/* ---------------------------------Dhikr-1----------------------------------------------*/


let saveEl=document.getElementById("save-el");
let count=0;
let countEl=document.getElementById("count-el");
function increment(){
    count+=1;
    countEl.textContent=count;
    // console.log(count);
}
function save(){
    let countString=count+" - ";
    saveEl.textContent+=countString;
    count=0;
    countEl.textContent=count;
}


/* ----------------------------------Dhikr-2----------------------------------------------*/


let saveEl2=document.getElementById("save-el2");
let countTwo=0;
let countEl2=document.getElementById("count-el2");
function increment2(){
    countTwo+=1;
    countEl2.textContent=countTwo;
}

function save2(){
    let countString2=countTwo+" - ";
    saveEl2.textContent+=countString2;
    countTwo=0;
    countEl2.textContent=countTwo;
}


/* ----------------------------------Dhikr-3-------------------------------------------------*/

let saveEl3=document.getElementById("save-el3");
let countThree=0;
let countEl3=document.getElementById("count-el3");
function increment3(){
    countThree+=1;
    countEl3.textContent=countThree;
}

function save3(){
    let countString3=countThree+" - ";
    saveEl3.textContent+=countString3;
    countThree=0;
    countEl3.textContent=countThree;
}


/* -----------------------------------Dhikr-4-----------------------------------------------*/

let saveEl4=document.getElementById("save-el4");
let countFour=0;
let countEl4=document.getElementById("count-el4");
function increment4(){
    countFour+=1;
    countEl4.textContent=countFour;
}

function save4(){
    let countString4=countFour+" - ";
    saveEl4.textContent+=countString4;
    countFour=0;
    countEl4.textContent=countFour;
}
