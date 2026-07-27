const steps = [

document.getElementById("step1"),

document.getElementById("step2"),

document.getElementById("step3"),

document.getElementById("step4"),

document.getElementById("step5")

];

let currentStep = 0;

function showStep(index){

steps.forEach(step=>{

step.classList.add("hidden");

});

steps[index].classList.remove("hidden");

}

setTimeout(()=>{

showStep(1);

},2500);

setTimeout(()=>{

showStep(2);

},6500);

setTimeout(()=>{

showStep(3);

},12000);

setTimeout(()=>{

showStep(4);

},17500);


/* ==========================================
   SECTION 2 - ENVELOPE
========================================== */

const intro = document.getElementById("intro");
const envelopeSection = document.getElementById("envelopeSection");

const beginBtn = document.getElementById("beginBtn");
const openLetterBtn = document.getElementById("openLetterBtn");

const envelope = document.getElementById("envelope");
const flap = document.querySelector(".envelope-flap");
const letter = document.querySelector(".envelope-letter");
const seal = document.querySelector(".wax-seal");

/* ===========================
   Intro → Envelope
=========================== */

beginBtn.addEventListener("click",()=>{

    intro.style.opacity="0";

    setTimeout(()=>{

        intro.classList.add("hidden");

        envelopeSection.classList.remove("hidden");

    },1200);

});

/* ===========================
   Open Letter
=========================== */

openLetterBtn.addEventListener("click",()=>{

    openLetterBtn.disabled=true;

    /* Wax Seal */

    seal.style.transform="translateX(-50%) scale(0)";

    setTimeout(()=>{

        /* Open Flap */

        flap.style.transform="rotateX(180deg)";

    },400);

    setTimeout(()=>{

        /* Letter Slides */

        letter.style.transform="translateY(-120px)";

    },900);

    setTimeout(()=>{

        envelopeSection.style.opacity="0";

    },2200);

    setTimeout(()=>{

        envelopeSection.classList.add("hidden");

        // Password Section comes here

        passwordSection.classList.remove("hidden");

    },3000);

});

/* ==========================================
   PASSWORD
========================================== */

const passwordSection = document.getElementById("passwordSection");

const unlockBtn = document.getElementById("unlockBtn");

const passwordInput = document.getElementById("passwordInput");

const passwordMessage = document.getElementById("passwordMessage");

const birthdaySection = document.getElementById("birthdaySection");

const continueJourney = document.getElementById("continueJourney");

unlockBtn.addEventListener("click",()=>{

    if(passwordInput.value==="0516"){

        passwordMessage.innerHTML="❤️<br><br>You remembered...";

        setTimeout(()=>{

            passwordSection.style.opacity="0";

        },1800);

        setTimeout(()=>{

            passwordSection.classList.add("hidden");

            // Birthday Section

            birthdaySection.classList.remove("hidden");

        },3000);

    }

    else{

        passwordMessage.innerHTML=

        "💭 Think about the day our story began... ❤️";

    }

});

const questionsSection = document.getElementById("questionsSection");

continueJourney.addEventListener("click",()=>{

    birthdaySection.style.opacity="0";

    setTimeout(()=>{

        birthdaySection.classList.add("hidden");

        questionsSection.classList.remove("hidden");

        alert("Questions Coming Soon ❤️");

    },1000);

});

/* ==========================================
   QUESTIONS ENGINE
========================================== */

let currentQuestion = 0;

const questions = [

{

title:"Can we play a little game? 😊",

subtitle:"I promise it'll only take a minute. ❤️",

answers:[

"Let's Play ❤️"

],

responses:[

{

title:"Yay!!",

text:"I knew you'd say yes. ❤️"

}

]

},

{

title:"If I could keep one thing forever...",

subtitle:"Choose one... 🥹",

answers:[

"😊 Your Smile",

"😂 Your Cute Anger",

"❤️ Your Heart",

"🌍 Everything About You"

],

responses:[

{

title:"Aww...",

text:"Your smile makes every day brighter."

},

{

title:"Hehe...",

text:"Even your cute anger makes me smile."

},

{

title:"Exactly...",

text:"Your heart is the most beautiful thing about you."

},

{

title:"That's My Girl ❤️",

text:"Honestly... I wanted to choose all of them."

}

]

}

];
