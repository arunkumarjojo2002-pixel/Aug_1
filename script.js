/* ==========================================
   GUBA ❤️ BHALU
   Girlfriend's Day Website
   script.js (Part 1)
==========================================*/

// ================= ELEMENTS =================

const introScreen = document.getElementById("intro-screen");
const giftBox = document.getElementById("gift-box");

const loadingScreen = document.getElementById("loading-screen");
const loadingProgress = document.querySelector(".loading-progress");
const loadingText = document.getElementById("loading-text");

const mainPage = document.getElementById("main-page");

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const noMessage = document.getElementById("no-message");

const relationshipCounter = document.getElementById("relationship-counter");

const typewriter = document.getElementById("typewriter");

const changingTitle = document.getElementById("changing-title");

const reasonBtn = document.getElementById("reason-btn");
const reasonText = document.getElementById("reason-text");

// ================= GIFT OPEN =================

giftBox.addEventListener("click", () => {

    introScreen.classList.add("hidden");

    loadingScreen.classList.remove("hidden");

    let progress = 0;

    const loader = setInterval(() => {

        progress++;

        loadingProgress.style.width = progress + "%";

        loadingText.innerText = progress + "%";

        if(progress >= 100){

            clearInterval(loader);

            loadingScreen.classList.add("hidden");

            mainPage.classList.remove("hidden");

        }

    },30);

});

// ================= RELATIONSHIP TIMER =================

function updateRelationship(){

    const start = new Date("December 14, 2023");

    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();
    let days = today.getDate() - start.getDate();

    if(days < 0){

        months--;

        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);

        days += prevMonth.getDate();

    }

    if(months < 0){

        years--;

        months += 12;

    }

    relationshipCounter.innerHTML = `
        ❤️ ${years} Years
        ${months} Months
        ${days} Days ❤️
    `;

}

updateRelationship();

// ================= TYPEWRITER =================

const message =

"Happy Girlfriend's Day, Bhalu ❤️ Thank you for making every day brighter. I love you so much!";

let typeIndex = 0;

function typeEffect(){

    if(typeIndex < message.length){

        typewriter.innerHTML += message.charAt(typeIndex);

        typeIndex++;

        setTimeout(typeEffect,60);

    }

}

typeEffect();

// ================= CHANGING TITLES =================

const titles = [

"Happy Girlfriend's Day ❤️",

"You Make My World Better 🌍",

"My Forever Bhalu 🥰",

"Forever Yours ❤️"

];

let titleIndex = 0;

setInterval(()=>{

    titleIndex++;

    if(titleIndex >= titles.length){

        titleIndex = 0;

    }

    changingTitle.innerHTML = titles[titleIndex];

},3000);

// ================= REASONS =================

const reasons = [

"Your smile brightens my darkest days. ❤️",

"You always make me laugh. 😂",

"You believe in me. 💖",

"You make ordinary moments special. ✨",

"You are my safest place. 🥰",

"I love your kindness. 🌸",

"I love your cute little habits. ❤️",

"You're my favorite person. 💕",

"I'm lucky to have you. 💗",

"I'll always choose you. 💍"

];

let reasonIndex = 0;

reasonBtn.addEventListener("click",()=>{

    reasonText.innerHTML = reasons[reasonIndex];

    reasonIndex++;

    if(reasonIndex >= reasons.length){

        reasonIndex = 0;

    }

});
/* ==========================================
   GUBA ❤️ BHALU
   script.js (Part 2)
==========================================*/

// ================= NO BUTTON =================

const funnyMessages = [
    "Don't say no... 🥺",
    "Are you sure? 😭",
    "Think again! ❤️",
    "You can't catch me 😂",
    "Please press YES 🥹",
    "I already know you'll choose YES 😘",
    "Nice try 😜",
    "YES looks much better ❤️"
];

let noCount = 0;
let yesScale = 1;

function moveNoButton() {

    const container = document.querySelector(".button-area");

    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    noMessage.innerHTML = funnyMessages[noCount];

    noCount++;

    if (noCount >= funnyMessages.length) {
        noCount = 0;
    }

    yesScale += 0.08;

    yesBtn.style.transform = `scale(${yesScale})`;

}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveNoButton();
});

// ================= YES BUTTON =================

const popup = document.getElementById("love-popup");

yesBtn.addEventListener("click", () => {

    launchConfetti();

    popup.classList.remove("hidden");

});

// ================= CONTINUE =================

const continueBtn = document.getElementById("continue-btn");
const gallery = document.getElementById("gallery-section");

continueBtn.addEventListener("click", () => {

    popup.classList.add("hidden");

    gallery.classList.remove("hidden");

    gallery.scrollIntoView({
        behavior: "smooth"
    });

});

// ================= MUSIC =================

const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "⏸️";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

        playing = false;

    }

});

// ================= CONFETTI =================

function launchConfetti() {

    if (typeof confetti !== "function") return;

    confetti({
        particleCount: 180,
        spread: 90,
        origin: {
            y: 0.6
        }
    });

}

// ================= FLOATING HEARTS =================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 700);

// ================= PETALS =================

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 1200);

// ================= SPARKLES =================

document.addEventListener("mousemove", function(e){

    if(Math.random() > 0.7){

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.innerHTML = "✨";

        sparkle.style.left = e.clientX + "px";
        sparkle.style.top = e.clientY + "px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },2000);

    }

});

// ================= END =================

console.log("❤️ Website Loaded Successfully ❤️");