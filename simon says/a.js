let gs = [];
let us = [];
let btns = ["y","r","p","g"];
let h4 = document.querySelector("h4");
let started = false;
let level = 0;
let hs = 0;
let heading = document.querySelector("h1");
let hse = document.createElement("h4");

document.addEventListener("keypress",function(){  // step 1
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
        
        heading.append(hse);
        hse.innerText = `High Score: ${hs}`;

    }
    
})

function btnflash(btn){
    let orgcol = btn.style.backgroundColor; 
   btn.style.backgroundColor = "white";
   setTimeout(function(){
    btn.style.backgroundColor = orgcol;
   }, 400);
}

function levelup(){   
    level++;
    us=[];
    h4.innerText = ` level:${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randcol = btns[randIdx];
    let randBtn = document.querySelector(`.${randcol}`);
    gs.push(randcol);
    // console.log(gs);
    // console.log(randBtn);
  btnflash(randBtn);
}
function checkAns(idx){
    // console.log("curr lvl :",level);
    let i = idx;
    if(us[i] == gs[i]){
        // console.log("same value");
        if(us.length == gs.length){
            setTimeout(levelup,1000);
            if(hs<level){
                hs = level;
            }
            hse.innerText = `High Score: ${hs}`;
        }
    }else{
        let oc = document.querySelector("body").style.backgroundColor;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = oc;
        },200);
        h4.innerHTML = `Game Over, <b>your score was ${level-1} </b>.<br> Press any key to restart`;
        reset();
 }

}
function btnpress(){
    let btn = this;
    btnflash(btn);
    usercolor = btn.getAttribute("id");
    us.push(usercolor);
    // console.log(us);
    checkAns(us.length-1);
   
}
let allbtns = document.querySelectorAll(".pad");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    level = 0;
    gs = [];
    us = [];
}