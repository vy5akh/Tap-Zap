// let gameSeq=[];
// let userSeq=[];

// let started= false;
// let level =0;

// let btns=["red","yellow","green","blue"];

// let h3= document.querySelector("h3");

// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(() => {btn.classList.remove("flash");     
//     },250);
// }
// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(() => {btn.classList.remove("userflash");    
//     },250);
// }

// function levelUp(){
//     userSeq=[];
//     level++;
//     h3.innerText=`Level ${level}`;

//     let randIdx= Math.floor(Math.random()*3);
//     let randColor=btns[randIdx];
//     let randbtn=document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randbtn); 
// }

// function checkAns(idx){
   
//     if (userSeq[idx]==gameSeq[idx]){
//         if(userSeq.length== gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//     }
//     else{
//         h3.innerHTML=`Game Over! Your score was <b>${level}</b> Press any key to start.`;
//         document.querySelector("body").style.backgroundColor= "#FFA500";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor= "white";
//         },150)
//         reset();
//     }
// }


// function btnPress(){
//     console.log(this);
//     let btn = this; 
//     userFlash(btn);

//     userColor= btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns(userSeq.length-1)
    
// }


// let allBtns= document.querySelectorAll(".btn");
// for (btn of allBtns){
//     btn.addEventListener("click",btnPress);
// }

// document.addEventListener("keypress",function(){
    
//     if (started==false){
//         console.log("Game started");
//         started =true;
//         levelUp();
//     }

// });

// function reset(){
//     started= false;
//     gameSeq=[];
//     userSeq=[];
//     level=0;
// }


let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "blue"];
let h3 = document.querySelector("h3");

// Load audio
const machineSound = new Audio("machine.wav");
const userSound = new Audio("user.wav");
const wrongSound = new Audio("wrong.wav");

function playMachineSound() {
    machineSound.currentTime = 0;
    machineSound.play();
}

function playUserSound() {
    userSound.currentTime = 0;
    userSound.play();
}

function playWrongSound() {
    wrongSound.currentTime = 0;
    wrongSound.play();
}

function gameFlash(btn) {
    playMachineSound();
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    playUserSound();
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); // 0–3
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        playWrongSound();
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> Press any key to start.`;
        document.body.style.backgroundColor = "#FFA500";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
