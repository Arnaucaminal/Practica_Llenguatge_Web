//LIGHTBOX (GALERIA / FONS DE PANTALLA)

const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImage");
const lbCaption = document.getElementById("lbCaption");
const lbClose = document.getElementById("lbClose");

/* Obrir lightbox */
document.querySelectorAll(".wp-img").forEach(img => {
    img.addEventListener("click", () => {
        if (!lb || !lbImg || !lbCaption) return;

        lbImg.src = img.src;
        lbCaption.textContent = img.alt;
        lb.classList.remove("hidden");
    });
});

/* Tancar lightbox */
if (lb && lbImg && lbCaption && lbClose) {

    lbClose.addEventListener("click", closeLightbox);

    lb.addEventListener("click", (e) => {
        if (e.target === lb) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });
}

function closeLightbox() {
    lb.classList.add("hidden");
    lbImg.src = "";
}



//JOC DEL MES (DINÀMIC)


document.addEventListener("DOMContentLoaded", () => {

    const gameTitle = document.getElementById("gameTitle");
    const gameText = document.getElementById("gameText");

    // Si no som a index.html, no fem res
    if (!gameTitle || !gameText) return;

    const gamesOfMonth = [
        // Nintendo
        "The Legend of Zelda: Breath of the Wild",
        "The Legend of Zelda: Tears of the Kingdom",
        "Super Mario Odyssey",
        "Super Mario Bros. Wonder",
        "Super Mario 3D All Stars",
        "Mario Kart 8 Deluxe",
        "Mario & Luigi Brothership",
        "Luigi's Mansion 3",
        "Metroid Dread",
        "Kirby Star Allies",
        "Kirby and the Forgotten Land",
        "Kirby Air Riders",
        "Animal Crossing: New Horizons",
        "Xenoblade Chronicles Definitive Edition",
        "Xenoblade Chronicles 3",
        "Splatoon 2",
        "Splatoon 3",
        "Super Smash Bros Ultimate",

        // Sega / Sonic
        "Sonic Frontiers",
        "Sonic Mania",
        "Sonic Forces",
        "Sonic x Shadow Generations",
        "Sonic Racing CrossWordls",
        "Sonic Origins",

        // RPG / Acció
        "Final Fantasy VII Remake",
        "Final Fantasy XVI",
        "Persona 5 Royal",
        "NieR: Automata",
        "Elden Ring",

        // PlayStation
        "God of War Ragnarök",
        "Horizon Forbidden West",
        "The Last of Us Part I",
        "Ghost of Tsushima",

        // Indie / PC
        "Five Nights At Freddy's",
        "Cuphead",
        "Moonlighter",
        "Hyper Light Drifter",
        "Hollow Knight",
        "Celeste",
        "Undertale",
        "Stardew Valley",
        "Hades",
        "Dead Cells",

        // Clàssics
        "The Legend of Zelda: Ocarina of Time",
        "Super Metroid",
        "Chrono Trigger",
        "Castlevania: Symphony of the Night"
    ];

    const randomGame =
        gamesOfMonth[Math.floor(Math.random() * gamesOfMonth.length)];

    gameTitle.textContent = randomGame;
});




//ANIMACIONS EN ENTRAR A PANTALLA

const animatedElements = document.querySelectorAll(".animate-on-scroll");

function checkScroll() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkScroll);
checkScroll();
