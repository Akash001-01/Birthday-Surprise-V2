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
const bgMusic = document.getElementById("bgMusic");
const openLetterBtn = document.getElementById("openLetterBtn");

const envelope = document.getElementById("envelope");
const flap = document.querySelector(".envelope-flap");
const letter = document.querySelector(".envelope-letter");
const seal = document.querySelector(".wax-seal");

/* ===========================
   Intro → Envelope
=========================== */

beginBtn.addEventListener("click", () => {

    console.log("CLICK");

    startMusic();   // ❤️ Start music

    intro.classList.add("hidden");

    envelopeSection.classList.remove("hidden");

    envelopeSection.style.display = "flex";

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

        passwordMessage.innerHTML="❤️You remembered...";

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

        "Think about the day our first meetup 🤭❤️";

    }

});

const questionsSection = document.getElementById("questionsSection");

const heartProgress = document.getElementById("heartProgress");

const questionTitle = document.getElementById("questionTitle");

const questionSubtitle = document.getElementById("questionSubtitle");

const answerContainer = document.getElementById("answerContainer");

const questionContent = document.getElementById("questionContent");

const responseCard = document.getElementById("responseCard");

const responseTitle = document.getElementById("responseTitle");

const responseText = document.getElementById("responseText");

continueJourney.addEventListener("click",()=>{

    birthdaySection.style.opacity="0";

    setTimeout(()=>{

        birthdaySection.classList.add("hidden");

        questionsSection.classList.remove("hidden");

       currentQuestion = 0;

       startQuestions();

    },1000);

});

/* ==========================================
   QUESTIONS ENGINE
========================================== */

let currentQuestion = 0;

const questions = [

const questions = [

{
title:"Enna paatha unakku first enna thonum? 🤭",
subtitle:"Choose honestly... ❤️",
answers:[
"😊 Cute",
"😂 Loosu",
"🥹 Caring",
"❤️ Ellameyy"
],
responses:[
{
title:"😊 Awww...",
text:"Cute-ah? Adha ketta odane enakku semma happy aayiduchu. 🥹❤️"
},
{
title:"😂 Hehe...",
text:"Seri... loosu dhaan. Aana indha loosu unakku mattum dhaan. 🤭💖"
},
{
title:"🥹 Thank You...",
text:"Unna care pannradhu enakku romba pidikkum. Adha nee notice pannadhe romba special. ❤️"
},
{
title:"❤️ My Favourite...",
text:"Idha dhaan naan expect pannen... ellameyy-na naan official-aa happy. 🥹🤍"
}
]
},

{
title:"Ennoda Chellam, Thangoo, Pattu elameyy yaru? 🥹❤️",
subtitle:"Idhuku correct answer theriyume... 🤭",
answers:[
"🌸 Sai Dhatchayani",
"💖 You (Sai)",
"🥰 Sweeeetuhhh",
"🤭 All the Above"
],
responses:[
{
title:"🌸 Beautiful...",
text:"Peyar romba azhagu... aana enakku nee adha vida romba special. ❤️"
},
{
title:"💖 Exactly...",
text:"Aama... nee dhaan! En favourite person forever. 🥹"
},
{
title:"🥰 Hehe...",
text:"Sweeeetuhhh nu koopidradhu enakku romba pidikkum. ❤️"
},
{
title:"🤭 Jackpot!",
text:"Correct-u! Nee en Chellam... Thangoo... Pattu... Sweeeetuhhh... ellameyy nee dhaan. ❤️🥹"
}
]
},

{
title:"Namma next date-ku enga pogalam? 🥹❤️",
subtitle:"Let's make another beautiful memory... ✨",
answers:[
"🌊 Beach",
"☕ Cute Cafe",
"🏍️ Long Ride",
"✈️ Surprise Trip"
],
responses:[
{
title:"🌅 Perfect!",
text:"Sunset-ah vida azhaga irukum... nee en pakkathula irundha. 🌊❤️"
},
{
title:"☕ Coffee Date!",
text:"Coffee kulirndhaalum parava illa... namma conversations dhaan enakku romba pidikkum. 🤭❤️"
},
{
title:"🏍️ Let's Go!",
text:"Road evlo long irundhaalum parava illa... nee pinnadi irundha pothum. ❤️"
},
{
title:"✈️ Adventure!",
text:"Bags pack panniko... destination secret! Aana oru condition... en kaiya vida koodadhu. 🤭❤️"
}
]
},
{
title:"Naan daily message panninaa...? 📱❤️",
subtitle:"Un honest answer venum... 🤭",
answers:[
"🥰 Happy",
"🤭 Smile",
"😂 Ignore",
"❤️ Wait pannitu irupen"
],
responses:[
{
title:"🥰 Awww...",
text:"Idha ketta romba happy aayiten... appo daily message pannuren. ❤️"
},
{
title:"🤭 Cute...",
text:"Un smile-kaaga dhaan sila neram message anupuren. 🥹💕"
},
{
title:"😂 Aiyoo...",
text:"Ignore panna fine ₹100! 😂 Aana next message kandipa anupiduven. 🤭"
},
{
title:"❤️ My Favourite...",
text:"Indha answer dhaan enakku romba pidichadhu... waiting-ku reward oru big hug. 🥹❤️"
}
]
},

{
title:"Enna oru word-la describe panna...? 🥹",
subtitle:"Just one word... ❤️",
answers:[
"❤️ Sweet",
"😂 Loosu",
"🤍 Caring",
"🌍 Home"
],
responses:[
{
title:"❤️ Sweet-aa?",
text:"Nee sonna indha oru word pothum... whole day smile pannitu iruppen. 🥹"
},
{
title:"😂 Hehe...",
text:"Loosu dhaan... aana un loosu. Adhu podhum. 🤭❤️"
},
{
title:"🤍 Thank You...",
text:"Unna care pannradhu enakku romba natural... adha nee appreciate pannadhu romba special. ❤️"
},
{
title:"🌍 Awww...",
text:"'Home' nu sonnadhu dhaan indha website-la kedaicha biggest compliment. 🥹🤍"
}
]
},

{
title:"Naa unna ippo enna pannanu nu aasai? 🤭❤️",
subtitle:"Choose one... 😌",
answers:[
"🤗 Hug",
"😘 Kiss",
"😊 Smile",
"❤️ Hold Hands"
],
responses:[
{
title:"🤗 Come Here...",
text:"Idhu dhaan naanum aasai patten... oru big birthday hug! 🥹❤️"
},
{
title:"😘 Ahem...",
text:"Birthday special-na idhellam allowed dhaane? 🤭💋"
},
{
title:"😊 My Favourite...",
text:"Un smile dhaan enakku biggest birthday gift. ❤️"
},
{
title:"❤️ Forever...",
text:"Kaiya pidichitu konjam neram nadakkanum... adhuve romba podhum. 🥹💕"
}
]
},
{
title:"Naa konjam possessive-ah irundha...? ❤️",
subtitle:"Honest answer only... 🤭",
answers:[
"🤭 Cute",
"😂 Konjam Over",
"🥹 Adhuvum Pidikkum",
"❤️ Nee epdi irundhalum pidikkum"
],
responses:[
{
title:"🤭 Hehe...",
text:"Konjam possessive-na... love konjam adhigam nu artham dhaane? ❤️"
},
{
title:"😂 Seri...",
text:"Konjam improve pannikiren... aana konjam possessive irukka permission irukulla? 🤭"
},
{
title:"🥹 Awww...",
text:"Indha answer ketta odane en heart full happy aayiduchu. ❤️"
},
{
title:"❤️ Happiest Me...",
text:"Nee epdi irundhalum pidikkum-nu ketta... adhuku mela vera enna venum. 🥹💕"
}
]
},

{
title:"Namma rendu perum oru movie-na...? 🎬",
subtitle:"Which genre suits us? 🤭",
answers:[
"😂 Comedy",
"💖 Love Story",
"🎭 Drama",
"🌍 Adventure"
],
responses:[
{
title:"😂 Haha...",
text:"Nee irundha comedy automatically nadakkum. 🤣❤️"
},
{
title:"💖 Perfect!",
text:"Love Story dhaan... climax mattum lifetime happy ending. 🥹❤️"
},
{
title:"🎭 Hmm...",
text:"Konjam sanda... adhuku apram neraya konjal. 🤭💕"
},
{
title:"🌍 Let's Go!",
text:"Hero, Heroine ready... adventure start pannalama? ❤️"
}
]
},

{
title:"Enna pathi oru complaint sollanum-na enna solluva? 🤭",
subtitle:"Promise... kovapada maaten. 😂",
answers:[
"😂 Romba tease pannuva",
"📱 Late reply pannuva",
"🤭 Romba miss panna veppa",
"❤️ Endha complaint-um illa"
],
responses:[
{
title:"😂 Guilty...",
text:"Hehe... konjam tease pannalana namma chats bore adichidum la? 🤭❤️"
},
{
title:"📱 Sorry...",
text:"Seri... inime seekiram reply panna try pannuren. Promise! 🥹"
},
{
title:"🤭 Awww...",
text:"Idha complaint-nu eduthukalama... illa compliment-nu eduthukalama? ❤️🥹"
},
{
title:"❤️ Happiest...",
text:"Indha answer-ku naan speechless... romba happy aayiten. 🥹❤️"
}
]
},

{
title:"Oru secret sollava...? 🤫❤️",
subtitle:"Last question... Ready? 🥹",
answers:[
"🥹 Sollu",
"🤭 Ready",
"❤️ Waiting",
"✨ Yes"
],
responses:[
{
title:"❤️ Secret...",
text:"Indha website-la irukka ovvoru screen-um... ovvoru animation-um... ovvoru line of code-um... un smile-kaaga dhaan create pannadhu. ❤️🥹"
},
{
title:"🤭 Secret...",
text:"Indha website-la irukka ovvoru screen-um... ovvoru animation-um... ovvoru line of code-um... un smile-kaaga dhaan create pannadhu. ❤️🥹"
},
{
title:"❤️ Secret...",
text:"Indha website-la irukka ovvoru screen-um... ovvoru animation-um... ovvoru line of code-um... un smile-kaaga dhaan create pannadhu. ❤️🥹"
},
{
title:"✨ Secret...",
text:"Indha website-la irukka ovvoru screen-um... ovvoru animation-um... ovvoru line of code-um... un smile-kaaga dhaan create pannadhu. ❤️🥹"
}
]
}
   
];

function updateHearts(){

let hearts="";

for(let i=0;i<questions.length;i++){

if(i<=currentQuestion-1){

hearts+="❤️ ";

}

else{

hearts+="🤍 ";

}

}

heartProgress.innerHTML=hearts;

}

function startQuestions(){

showQuestion();

}

function showQuestion(){

const q=questions[currentQuestion];

updateHearts();

responseCard.classList.add("hidden");

questionContent.classList.remove("hidden");

questionTitle.innerHTML=q.title;

questionSubtitle.innerHTML=q.subtitle;

answerContainer.innerHTML="";

q.answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.className="answer-btn";

btn.innerHTML=answer;

btn.onclick=()=>showResponse(index);

answerContainer.appendChild(btn);

});

}

/* ==========================================
   SHOW RESPONSE
========================================== */

function showResponse(answerIndex){

    const q = questions[currentQuestion];

    const response = q.responses[answerIndex];

    questionContent.classList.add("hidden");

    responseCard.classList.remove("hidden");

    responseTitle.innerHTML = response.title;

    responseText.innerHTML = response.text;

    setTimeout(()=>{

        currentQuestion++;

        if(currentQuestion < questions.length){

            showQuestion();

        }

        else{

            questionsFinished();

        }

    },2200);

}

/* ==========================================
   FINISHED
========================================== */

function questionsFinished(){

    responseTitle.innerHTML="🥹";

    responseText.innerHTML="You've reached the end of our little game... ❤️";

    setTimeout(()=>{

        questionsSection.style.opacity="0";

        setTimeout(()=>{

            questionsSection.classList.add("hidden");

            questionsSection.style.opacity = "1";

            // Love Letter Section will come here

           letterSection.style.opacity = "1";

           letterSection.classList.remove("hidden");

         typeLetter();

        },1000);

    },2000);

}

/* ==========================================
   LOVE LETTER
========================================== */

const letterSection =
document.getElementById("letterSection");

const letterContent =
document.getElementById("letterContent");

const reasonsSection =
document.getElementById("reasonsSection");

const reasonEmoji =
document.getElementById("reasonEmoji");

const reasonNumber =
document.getElementById("reasonNumber");

const reasonText =
document.getElementById("reasonText");

const loveLetter = `

My Dearest Sweeetuuhh ❤️,

Happy Birthday, my favorite person.

I don't know if words will ever be enough,
but today I wanted to create something
that would stay with you for a long time.

So...
instead of buying another gift,
I decided to build you a little journey.
Every screen you saw...
every animation...
every tiny detail...
was made while thinking about you.
I wanted this surprise to make you smile,
even if only for a few minutes.
Because seeing you happy
has always been one of my favorite things.
I hope today reminds you
how loved,
how appreciated,
and how special you truly are.
Never stop smiling.
Never stop being the amazing person you are.
And whenever life feels difficult,
remember...
there's someone who will always want
to see that beautiful smile again.

Thank you...
for being part of so many beautiful memories.
Thank you...
for simply being YOU.

Happy Birthday once again,
my Sweeetuuhh.

May this year bring you
more laughter,
more peace,
more adventures,
and countless beautiful moments.

With all my heart,
Akash ❤️

`;

function typeLetter(){

    let i = 0;

    const cleanLetter = loveLetter.replace(/\n{3,}/g, "\n\n");

    letterContent.innerHTML = "";

    const petals = setInterval(createPetal, 700);

    function typeNext() {

        letterContent.innerHTML += cleanLetter.charAt(i);
        letterContent.scrollTop = letterContent.scrollHeight;
        i++;

        if (i >= cleanLetter.length) {

            clearInterval(petals);

            setTimeout(showReasons, 3000);

            return;
        }

        // Random typing speed (40–80ms)
        setTimeout(typeNext, 60 + Math.random() * 60);

    }

    typeNext();

}

function createPetal(){

const petal=document.createElement("div");

petal.className="letter-petal";

petal.innerHTML=Math.random()>.5?"🌸":"💖";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

}

/* ==========================================
   REASONS DATA
========================================== */

const reasons = [

{
    emoji:"❤️",
    text:"Your smile makes ordinary days feel extraordinary."
},

{
    emoji:"🌸",
    text:"You make people feel comfortable just by being yourself."
},

{
    emoji:"✨",
    text:"Your happiness genuinely matters to me."
},

{
    emoji:"🥹",
    text:"Every conversation with you becomes a beautiful memory."
},

{
    emoji:"💖",
    text:"Your kindness is something I'll always admire."
},

{
    emoji:"😊",
    text:"You make even simple moments feel special."
},

{
    emoji:"🌙",
    text:"Your calmness brings peace to my heart."
},

{
    emoji:"💌",
    text:"You inspire me to become a better person."
},

{
    emoji:"🥰",
    text:"Thank you for simply being YOU."
},

{
    emoji:"❤️",
    text:"And the biggest reason...\n\nBecause you're YOU.\n\nThat's more than enough."
}

];

let currentReason = 0;

function showReasons(){

    letterSection.style.opacity="0";

    setTimeout(()=>{

        letterSection.classList.add("hidden");

        letterSection.style.opacity="1";

        reasonsSection.classList.remove("hidden");

        playReasons();

    },1200);

}

function playReasons(){

    if(currentReason>=reasons.length){

        reasonsFinished();

        return;

    }

    const r=reasons[currentReason];

    reasonEmoji.innerHTML=r.emoji;

    reasonNumber.innerHTML="Reason #"+(currentReason+1);

    reasonText.innerHTML=r.text;

    currentReason++;

    setTimeout(playReasons,3000);

}

function reasonsFinished(){

    reasonsSection.style.opacity="0";

    setTimeout(()=>{

        reasonsSection.classList.add("hidden");

        finalSection.classList.remove("hidden");

        startFireworks();

    },1200);

}

// =========================
// FIREWORKS ENGINE
// =========================

const finalSection = document.getElementById("finalSection");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

let fireworks = [];
let particles = [];
let sakura = [];
let fireworkInterval;

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

// -------------------------

class Firework{

    constructor(){

        this.x = Math.random()*canvas.width;
        this.y = canvas.height;

        this.targetY =
        50 + Math.random() * (canvas.height * 0.6);

        this.speed = 6 + Math.random()*3;

        this.color =
        `hsl(${Math.random()*360},100%,60%)`;

    }

    update(){

        this.y -= this.speed;

        if(this.y <= this.targetY){

            explode(this.x,this.y,this.color);

            return false;

        }

        return true;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,3,0,Math.PI*2);

        ctx.fillStyle=this.color;

        ctx.fill();

    }

}

// -------------------------

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        const angle=Math.random()*Math.PI*2;

        const speed=Math.random()*5+2;

        this.vx=Math.cos(angle)*speed;
        this.vy=Math.sin(angle)*speed;

        this.alpha=1;

        this.color=color;

        this.size=3+Math.random()*3;

    }

    update(){

        this.x+=this.vx;

        this.y+=this.vy;

        this.vy+=0.04;

        this.alpha-=0.012;

        return this.alpha>0;

    }

    draw(){

        ctx.globalAlpha=this.alpha;

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

        ctx.fillStyle=this.color;

        ctx.fill();

        ctx.globalAlpha=1;

    }

}

// -------------------------

function explode(x,y,color){

    const isHeart = Math.random() < 0.12; // 12% chance

    if(isHeart){

        createHeartExplosion(x, y, "#ff4f9d");
        return;

    }

    for(let i=0;i<180;i++){

        particles.push(

            new Particle(x,y,color)

        );

    }

}

function createHeartExplosion(x,y,color){

    for(let i=0;i<220;i++){

        const t = (Math.PI * 2 * i) / 220;

        const hx = 16 * Math.pow(Math.sin(t),3);

        const hy =
            -(13*Math.cos(t)
            -5*Math.cos(2*t)
            -2*Math.cos(3*t)
            -Math.cos(4*t));

        const p = new Particle(x,y,color);

        p.vx = hx * 0.18;
        p.vy = hy * 0.18;

        p.size = 5 + Math.random()*2;

        particles.push(p);

    }

}

// -------------------------

function animateFireworks(){

    ctx.fillStyle="rgba(0,0,0,.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

   sakura.forEach(p=>{

    p.update();

    p.draw();

});

    fireworks = fireworks.filter(f=>{

        f.draw();

        return f.update();

    });

    particles = particles.filter(p=>{

        p.draw();

        return p.update();

    });

    requestAnimationFrame(animateFireworks);

}

// -------------------------

function startFireworks(){

    animateFireworks();

    fireworkInterval = setInterval(()=>{

        fireworks.push(new Firework());

    },350);

    setTimeout(()=>{

        clearInterval(fireworkInterval);

        showFinalMessage();

    },15000);

}

// =====================================
// SAKURA PETALS
// =====================================

class Sakura{

    constructor(){

        this.reset();

        this.y = -20;

    }

    reset(){

        this.x = Math.random()*canvas.width;

        this.y = -30;

        this.size = 20 + Math.random()*15;

        this.speed = 0.5 + Math.random()*1.0;

        this.swing = Math.random()*2;

        this.angle = Math.random()*360;

        this.rotate = Math.random()*2-1;

        this.alpha = 0.6 + Math.random()*0.4;

    }

    update(){

        this.y += this.speed;

        this.x += Math.sin(this.y*0.02)*this.swing;

        this.angle += this.rotate;

        if(this.y>canvas.height+40){

            this.reset();

        }

    }

    draw(){

        ctx.save();

        ctx.translate(this.x,this.y);

        ctx.rotate(this.angle*Math.PI/180);

        ctx.globalAlpha=this.alpha;

        ctx.fillStyle="#ff9fcf";

        ctx.font = this.size + "px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("❤️", 0, 0);
        ctx.restore();

        }

}

for(let i=0;i<40;i++){

    sakura.push(new Sakura());

}

function showFinalMessage(){

    const card = document.createElement("div");

    card.id = "endingCard";

    card.innerHTML = `
        <h1>❤️</h1>

        <h2>Happy Birthday</h2>

        <h3>My Sweeetuuhh 💖😘</h3>

        <p>
            Every screen...
            Every animation...
            Every little detail...
            was made thinking about you.
            I hope this birthday brings you endless smiles.
            <br><br>
            Thank you for being YOU.
            <br><br>
            Love,
            <strong>Akash 🫶</strong>
        </p>
    `;

    finalSection.appendChild(card);

}

// ===============================
// BACKGROUND MUSIC
// ===============================

function startMusic(){

    bgMusic.volume = 0;

    bgMusic.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if(volume >= 0.20){

            volume = 0.20;

            clearInterval(fade);

        }

        bgMusic.volume = volume;

    },200);

}

function stopMusic(){

    const fade = setInterval(() => {

        if(bgMusic.volume > 0.02){

            bgMusic.volume -= 0.01;

        }else{

            bgMusic.pause();

            bgMusic.currentTime = 0;

            clearInterval(fade);

        }

    },200);

}
