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
answers:["Let's Play ❤️"],
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
{title:"Aww...",text:"Your smile makes every day brighter."},
{title:"Hehe...",text:"Even your cute anger makes me smile."},
{title:"Exactly...",text:"Your heart is the most beautiful thing about you."},
{title:"❤️",text:"Honestly... I wanted to choose all of them."}
]
},

{
title:"If today had only one rule...",
subtitle:"What would you choose?",
answers:[
"🥳 Smile More",
"🍰 Eat More Cake",
"❤️ Stay Happy",
"✨ All Of The Above"
],
responses:[
{title:"😊",text:"Your smile is enough to brighten today."},
{title:"🍰",text:"Birthday means cake is mandatory!"}, 
{title:"❤️",text:"That's all I've wished for."},
{title:"✨",text:"Perfect choice. I expected nothing less."}
]
},

{
title:"Which notification makes me smile instantly?",
subtitle:"🤭",
answers:[
"📱 Your Message",
"📦 Amazon Delivery",
"💰 Salary Credit",
"🎮 Game Invite"
],
responses:[
{title:"❤️",text:"Every message from you makes my day better."},
{title:"😂",text:"Nice try... but not quite."},
{title:"💰",text:"Useful... but not as special as you."},
{title:"🎮",text:"Games can wait. You can't."}
]
},

{
title:"Which smile melts my heart?",
subtitle:"🥹",
answers:[
"😊 Morning Smile",
"🥰 Shy Smile",
"😂 Laughing Smile",
"❤️ Every Single One"
],
responses:[
{title:"🌞",text:"Morning suits you beautifully."},
{title:"🥰",text:"That smile is dangerous... in the cutest way."},
{title:"😂",text:"Your laugh is contagious."},
{title:"❤️",text:"Hehe... that's what I secretly hoped you'd choose."}
]
},

{
title:"If I had one birthday wish...",
subtitle:"🎂",
answers:[
"🎂 More Cake",
"❤️ Your Happiness",
"🏍️ New Bike",
"💰 More Money"
],
responses:[
{title:"😂",text:"Cake is always welcome."},
{title:"❤️",text:"This is the only wish that truly matters."},
{title:"🏍️",text:"Maybe someday... 😄"},
{title:"💸",text:"Money comes and goes. Smiles stay."}
]
},

{
title:"Complete this...",
subtitle:"You + Me = ?",
answers:[
"😂 Trouble",
"❤️ Beautiful Memories",
"🌍 Endless Adventures",
"✨ Everything"
],
responses:[
{title:"😂",text:"The fun kind of trouble."},
{title:"❤️",text:"Exactly... memories we'll never forget."},
{title:"🌍",text:"Adventure sounds perfect."},
{title:"✨",text:"Couldn't have answered better."}
]
},

{
title:"One thing I never want you to lose...",
subtitle:"❤️",
answers:[
"📱 Phone",
"😊 Your Smile",
"🎂 Cake",
"💰 Money"
],
responses:[
{title:"📱",text:"Phones can be replaced."},
{title:"❤️",text:"Your smile is priceless."},
{title:"🍰",text:"Cake disappears quickly 😂"},
{title:"💰",text:"Money returns. Smiles matter more."}
]
},

{
title:"Today's mission...",
subtitle:"✨",
answers:[
"😊 Smile",
"😂 Laugh",
"❤️ Stay Happy",
"🌸 All Three"
],
responses:[
{title:"😊",text:"Please keep smiling today."},
{title:"😂",text:"I hope you laugh a lot today."},
{title:"❤️",text:"That's my biggest wish."},
{title:"🌸",text:"Perfect mission accepted!"}
]
},

{
title:"One last thing...",
subtitle:"❤️",
answers:[
"💌 Show Me",
"🥹 I'm Ready",
"❤️ I've Been Waiting",
"✨ Continue"
],
responses:[
{title:"💌",text:"Then let me tell you something from my heart..."}
,
{title:"🥹",text:"Thank you for staying till the end."},
{title:"❤️",text:"I've been waiting too."},
{title:"✨",text:"Let's continue our little journey."}
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

            // Love Letter Section will come here

            alert("💌 Love Letter Coming Next");

        },1000);

    },2000);

}
