```javascript
// ===============================
// HBD Jamesch Minecraft Birthday
// ===============================

let giftOpen = false;
let nightCreated = false;

function enterWorld() {
    console.log("Enter World Clicked");

    const home = document.getElementById("home");
    const world = document.getElementById("birthday-world");

    if (home) {
        home.style.display = "none";
    }

    if (world) {
        world.style.display = "block";
        world.classList.add("show");

        const music = document.getElementById("minecraftMusic");
        const scene = document.querySelector(".minecraft-scene");

        if (scene) {
            scene.style.display = "block";
        }

        if (music) {
            music.play().catch(() => {});
        }
    }
}

// ===============================
// Gift Box
// ===============================

function openGift() {

    if (giftOpen) return;
    giftOpen = true;

    const gift = document.querySelector(".gift");

    if (gift) {
        gift.classList.add("open");
    }

    createNightSky();
    createFireworks();

    setTimeout(() => {

        alert(
            "🎁 Happy Birthday Jamesch ❤️\n\n" +
            "Welcome to your Minecraft Adventure World! ⛏️\n\n" +
            "แฮปปี้เบิดเดย์ครับผม มีความสุขเยอะๆ อย่าหายบ่อยถึงเพื่อนจะหายบ่อย หยอกๆ คิดถึงเสมอ อยากเจอด้วย สุขภาพแข็งแรงครับ\n\n" +
            "สุขสันต์วันเกิดคับพี่เจมส์ ขอได้มีความสวัสดีมงคล ประสบสุขงดงามแก่กาลทุกเมื่อนะคับ 🎂✨🫂💗"
        );

        // รีเซ็ตให้กดได้อีก
        if (gift) {
            gift.classList.remove("open");
        }

        giftOpen = false;

    }, 800);
}

// ===============================
// Firework Effect
// ===============================

function createFireworks() {

    for (let i = 0; i < 30; i++) {

        const firework = document.createElement("div");
        firework.className = "firework";

        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 60 + "vh";

        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1500);
    }
}

// ===============================
// Music Control
// ===============================

function toggleMusic() {

    const music = document.getElementById("minecraftMusic");

    if (!music) return;

    if (music.paused) {
        music.play().catch(() => {});
    } else {
        music.pause();
    }
}

// ===============================
// Minecraft Night Sky
// ===============================

function createNightSky() {

    // สร้างครั้งเดียว
    if (nightCreated) return;

    nightCreated = true;
    document.body.classList.add("night");

    // Moon
    const moon = document.createElement("div");
    moon.className = "moon";
    document.body.appendChild(moon);

    // Stars
    for (let i = 0; i < 80; i++) {

        const star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 60 + "vh";
        star.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(star);
    }
}
```
