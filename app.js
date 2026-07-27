

let gameSeq=[];
let userSeq=[];
let highestScore=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level=0;

let h2 = document.querySelector("h2");
let body = document.querySelector("body");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game started");

        levelUp();
    }
    // level=1;
    // 

})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function gameEndFlash(){
    body.classList.add("endFlash");
    setTimeout(function(){
        body.classList.remove("endFlash");
    },250)

}

function levelUp(){
    userSeq=[]; //MAJOR UPDATE whenever level increases user has to enter all values form the start
    level++;
    h2.innerText=`Level ${level}`;

    //generate random colour
    let random = Math.floor(Math.random()*3);
    let randomColor = btns[random]; 
    let randomBtn = document.querySelector(`.${randomColor}`);  

    //push colour to array
    gameSeq.push(randomColor);
    console.log(gameSeq)
    //flash random button
    gameFlash(randomBtn);
}

function check(index){

    if(userSeq[index]==gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp(),1500);   
        }
    }else{
        gameEndFlash();
        highestScore.push(level);
        let highScore = Math.max(...highestScore);
        h2.innerText = `Game Over!! Your score was ${level}. Your highest score is ${highScore}. Press any key to start again `; 
        
        reset();

    }
}

function btnPress(){
    let btn =  this;
    userFlash(btn); 

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click", btnPress)
    }

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
