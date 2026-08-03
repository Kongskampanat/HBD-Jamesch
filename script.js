// ===============================
// HBD Jamesch Minecraft World
// script.js
// ===============================


function enterWorld(){

    const home = document.getElementById("home");

    const world = document.getElementById("birthday-world");


    if(home){

        home.style.display = "none";

    }


    if(world){

        world.classList.add("show");

    }


    createFireworks();

}




function openGift(){


    const gift = document.querySelector(".gift");


    if(gift){

        gift.classList.add("open");

    }


    setTimeout(()=>{

        alert(
        "🎁 Happy Birthday Jamesch ❤️\n\nWelcome to your Minecraft Adventure!"
        );


    },800);



}




function createFireworks(){


    for(let i=0;i<20;i++){


        let firework =
        document.createElement("div");


        firework.className="firework";


        firework.style.left =
        Math.random()*100+"vw";


        firework.style.top =
        Math.random()*60+"vh";


        document.body.appendChild(firework);



        setTimeout(()=>{

            firework.remove();

        },1500);



    }


}
