// ===============================
// HBD Jamesch Minecraft Birthday
// ===============================

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
            music.play();
        }
    }
}

// ===============================
// Gift Open Control
// ===============================

// ===============================
// Gift Open Control & Modal
// ===============================

function openGift() {
    const gift = document.querySelector(".gift");

    if (gift) {
        gift.classList.add("open");
    }

    createNightSky();
    createFireworks();

    // แสดงหน้าต่าง Achievement แทน alert()
    setTimeout(() => {
        const modal = document.getElementById("achievement-modal");
        if(modal) {
            modal.classList.add("show");
        }
    }, 800);
}

// ฟังก์ชันสำหรับปิดหน้าต่าง Achievement
function closeModal() {
    const modal = document.getElementById("achievement-modal");
    if(modal) {
        modal.classList.remove("show");
    }

    // รีเซ็ตกล่องให้กลับมาปิด
    const gift = document.querySelector(".gift");
    if (gift) {
        gift.classList.remove("open");
    }
}

// ===============================
// Firework Effect
// ===============================

function createFireworks() {
    for (let i = 0; i < 30; i++) {
        let firework = document.createElement("div");
        firework.className = "firework";
        
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 60 + "vh";
        
        document.body.appendChild(firework);

        setTimeout(() => {
            if(firework.parentNode) {
                firework.parentNode.removeChild(firework);
            }
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
        music.play();
    } else {
        music.pause();
    }
}

// ===============================
// Minecraft Night Sky
// ===============================

function createNightSky() {
    if (document.body.classList.contains("night")) return;

    document.body.classList.add("night");

    let moon = document.createElement("div");
    moon.className = "moon";
    document.body.appendChild(moon);

    for (let i = 0; i < 80; i++) {
        let star = document.createElement("div");
        star.className = "star";
        
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 60 + "vh";
        star.style.animationDelay = Math.random() * 2 + "s";
        
        document.body.appendChild(star);
    }
}
