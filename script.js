/* =====================================
   HBD Jamesch - Minecraft Adventure
   script.js
===================================== */


/* ---------- ENTER WORLD ---------- */


function enterWorld(){

    const button =
    document.querySelector(".minecraft-btn");


    if(button){

        button.innerHTML =
        "LOADING WORLD...";

        button.disabled=true;

    }


    setTimeout(()=>{


        createFireworks();


        showMessage(

        "Welcome to Jamesch's Birthday World! 🎮"

        );


    },1500);



}



/* ---------- TYPE MESSAGE ---------- */


function showMessage(text){


    const box =
    document.querySelector(".message");


    if(!box) return;


    box.innerHTML="";


    let i=0;


    let timer=setInterval(()=>{


        box.innerHTML += text[i];


        i++;


        if(i>=text.length){

            clearInterval(timer);

        }


    },80);



}



/* ---------- GIFT ---------- */


function openGift(){

    const gift =
    document.querySelector(".gift");


    if(!gift) return;


    gift.style.animation="none";


    gift.style.transform=
    "rotateX(180deg) scale(1.3)";


    createFireworks();


    setTimeout(()=>{


        alert(
        "🎁 Happy Birthday Jamesch ❤️\n\nYour special adventure begins now!"
        );


    },700);


}




/* ---------- FIREWORK ---------- */


function createFireworks(){


    for(let i=0;i<30;i++){


        const firework =

        document.createElement("div");


        firework.className="firework";



        firework.style.left=

        Math.random()*100+"vw";


        firework.style.top=

        Math.random()*70+"vh";



        firework.style.animationDelay=

        Math.random()+"s";



        document.body.appendChild(firework);



        setTimeout(()=>{


            firework.remove();


        },1500);



    }



}





/* ---------- BLOCK EFFECT ---------- */


function createBlocks(){


    for(let i=0;i<10;i++){


        let block=

        document.createElement("div");


        block.className="block";



        block.style.left=

        Math.random()*100+"vw";


        block.style.bottom=

        Math.random()*200+"px";



        document.body.appendChild(block);



    }


}



/* ---------- CLICK SOUND ---------- */


function clickSound(){


    let sound=

    new Audio(

    "sounds/click.mp3"

    );


    sound.play();


}



/* ---------- PAGE LOAD ---------- */


window.onload=function(){


    createBlocks();



    const btn=

    document.querySelector(

    ".minecraft-btn"

    );



    if(btn){


        btn.addEventListener(

        "click",

        ()=>{


            clickSound();


            enterWorld();


        }


        );


    }



    const gift=

    document.querySelector(".gift");



    if(gift){


        gift.addEventListener(

        "click",

        openGift

        );


    }



};
const enterButton =
document.querySelector("#enterWorld");


if(enterButton){


enterButton.addEventListener(
"click",
()=>{


const world =
document.querySelector("#birthday-world");


document.querySelector(".card")
.style.display="none";


world.classList.add("show");


createFireworks();


}

);


}
