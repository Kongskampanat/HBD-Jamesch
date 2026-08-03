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
        const music =
document.getElementById("minecraftMusic");


if(music){

music.play();

}

    }


}
function openGift(){


const gift = document.querySelector(".gift");


if(gift){

    gift.classList.add("open");

}



createFireworks();



setTimeout(()=>{


alert(

"🎁 Happy Birthday Jamesch ❤️\n\n" +

"Welcome to your Minecraft Adventure World! ⛏️\n\n" +

"แฮปปี้เบิดเดย์ครับผม มีความสุขเยอะๆ อย่าหายบ่อยถึงเพื่อนจะหายบ่อย หยอกๆ คิดถึงเสมอ อยากเจอด้วย สุขภาพแข็งแรงครับ,\n" +

" สุขสันต์วันเกิดคับพี่เจมส์ ขอได้มีความสวัสดีมงคล ประสบสุขงดงามแก่กาลทุกเมื่อนะคับ🎂✨🫂💗 ✨"

);


},800);



}
// ===============================
// Firework Effect
// ===============================

function createFireworks(){


    for(let i = 0; i < 30; i++){


        let firework = document.createElement("div");


        firework.className = "firework";


        firework.style.left =
        Math.random()*100 + "vw";


        firework.style.top =
        Math.random()*60 + "vh";


        document.body.appendChild(firework);



        setTimeout(()=>{


            firework.remove();


        },1500);

        // ===============================
// Music Control
// ===============================


function toggleMusic(){


const music =
document.getElementById("minecraftMusic");



if(!music) return;



if(music.paused){


music.play();


}else{


music.pause();


}


}


    }


}
// ===============================
// Minecraft Night Sky
// ===============================


function createNightSky(){


document.body.classList.add("night");



// Moon

let moon =
document.createElement("div");


moon.className="moon";


document.body.appendChild(moon);




// Stars

for(let i=0;i<80;i++){


let star =
document.createElement("div");


star.className="star";


star.style.left =
Math.random()*100+"vw";


star.style.top =
Math.random()*60+"vh";


star.style.animationDelay =
Math.random()*2+"s";


document.body.appendChild(star);


}


}
