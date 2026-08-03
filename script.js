// ===============================
// HBD Jamesch Minecraft Birthday
// ===============================


function enterWorld(){

    console.log("Enter World Clicked");


    const home = document.getElementById("home");

    const world = document.getElementById("birthday-world");


    if(home){

        home.style.display = "none";

    }


    if(world){

        world.style.display = "block";

        world.classList.add("show");

    }


}

function openGift(){


const gift = document.querySelector(".gift");


if(gift){


gift.classList.add("open");


createFireworks();


}



setTimeout(()=>{


alert(

"🎁 Happy Birthday Jamesch ❤️\n\n" +

"Welcome to your Minecraft Adventure World!\n\n" +

"May your life be full of happiness,\n" +

"success and amazing adventures ⛏️✨"

);


},800);



}
