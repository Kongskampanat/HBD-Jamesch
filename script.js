/* =================================
   Minecraft Birthday Website
   Jamesch Edition
================================= */


/* Reset */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}


body{

    font-family:'Press Start 2P', cursive;

    height:100vh;

    overflow:hidden;

    background:
    linear-gradient(
        to bottom,
        #63c7ff 0%,
        #bdeaff 70%,
        #ffffff 100%
    );

    display:flex;

    justify-content:center;

    align-items:center;

}


/* =================================
   SKY
================================= */

.sky{

    position:absolute;

    width:100%;

    height:100%;

    overflow:hidden;

}


/* Sun */

.sun{

    position:absolute;

    width:120px;

    height:120px;

    background:#FFD54F;

    border-radius:50%;

    top:80px;

    right:150px;

    box-shadow:

    0 0 40px #FFD54F;

}


/* =================================
   CLOUD
================================= */


.cloud{

    position:absolute;

    background:white;

    width:180px;

    height:60px;

    border-radius:50px;

    opacity:.9;

    animation:
    cloudMove 45s linear infinite;

}


.cloud:before{

    content:"";

    position:absolute;

    width:90px;

    height:90px;

    background:white;

    border-radius:50%;

    left:25px;

    top:-45px;

}



.cloud:after{

    content:"";

    position:absolute;

    width:80px;

    height:80px;

    background:white;

    border-radius:50%;

    right:25px;

    top:-35px;

}



.cloud1{

    top:100px;

    left:-250px;

}



.cloud2{

    top:250px;

    left:-500px;

    animation-duration:70s;

}



@keyframes cloudMove{


from{

transform:translateX(-300px);

}


to{

transform:translateX(140vw);

}


}



/* =================================
   Minecraft Ground
================================= */


.ground{


position:absolute;

bottom:0;

width:100%;

height:200px;

background:#4CAF50;

border-top:15px solid #2E7D32;


}


.ground::before{


content:"";

position:absolute;

top:30px;

width:100%;

height:170px;

background:

repeating-linear-gradient(

90deg,

#4CAF50,

#4CAF50 40px,

#45A049 40px,

#45A049 80px

);


}



.ground::after{


content:"";

position:absolute;

bottom:0;

width:100%;

height:100px;

background:#795548;


}


/* =================================
   Main Card
================================= */


.card{


position:relative;

z-index:10;


background:

rgba(255,255,255,.95);


padding:50px;


width:700px;


text-align:center;


border:

8px solid #222;


box-shadow:

15px 15px 0 #000;


animation:

float 3s ease-in-out infinite;


}



@keyframes float{


0%,100%{

transform:translateY(0);

}


50%{

transform:translateY(-15px);

}


}



/* =================================
   Text
================================= */


h1{


font-size:35px;


line-height:1.6;


color:#43A047;


text-shadow:

4px 4px #222;


margin-bottom:25px;


}



h2{


font-size:18px;


color:#FBC02D;


text-shadow:

3px 3px #333;


margin-bottom:30px;


}



p{


font-size:13px;


line-height:2.2;


color:#333;


margin-bottom:40px;


}



/* =================================
   Button
================================= */


button{


font-family:

'Press Start 2P',
cursive;


font-size:14px;


padding:

20px 35px;


background:#4CAF50;


color:white;


border:

5px solid #1B5E20;


cursor:pointer;


box-shadow:

8px 8px 0 #222;


transition:.3s;


}



button:hover{


background:#8BC34A;


transform:

translateY(-5px);


box-shadow:

8px 13px 0 #222;


}



button:active{


transform:

translateY(5px);


box-shadow:

3px 3px 0 #222;


}



/* =================================
   Blocks Decoration
================================= */


.block{


position:absolute;


width:60px;

height:60px;


background:#8D6E63;


border:

5px solid #5D4037;


}


.block.grass{


background:#4CAF50;


border-color:#2E7D32;


}



/* =================================
   Firework Effect
================================= */


.firework{


position:absolute;


width:10px;

height:10px;


background:#FFD700;


border-radius:50%;


animation:

explode 1s infinite;


}



@keyframes explode{


0%{


transform:scale(1);


opacity:1;


}


100%{


transform:scale(10);


opacity:0;


}


}



/* =================================
   Mobile Responsive
================================= */


@media(max-width:768px){



.card{


width:90%;


padding:30px;


}



h1{


font-size:22px;


}


h2{


font-size:13px;


}


p{


font-size:10px;


}



button{


font-size:10px;


padding:15px;


}



}


/* =================================
   End
================================= */
