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

    }


    alert(
    "🎁 Happy Birthday Jamesch ❤️\n\nWelcome to your Minecraft World!"
    );


}
