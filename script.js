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

document.getElementById("beginBtn").addEventListener("click",()=>{

document.body.style.transition="1.5s";

document.body.style.opacity="0";

setTimeout(()=>{

// Next Section (Envelope)
alert("💌 Envelope Coming in Section 2");

},1500);

});
