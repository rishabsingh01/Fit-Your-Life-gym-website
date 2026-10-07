const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

window.addEventListener("load",()=>setTimeout(()=>$("#loginScreen").classList.add("hide"),2600));

const loginScreen=$("#loginScreen");
$("#headerLogin").onclick=()=>loginScreen.classList.remove("hide");
$("#loginForm").onsubmit=e=>{e.preventDefault();$("#loginMsg").textContent="Welcome to Fit Your Life.";setTimeout(()=>loginScreen.classList.add("hide"),900)};
$("#guestBtn").onclick=()=>{loginScreen.classList.add("hide")};

const data={
personal:{
tag:"01 / PERSONAL TRAINING",title:"PERSONAL TRAINING",
intro:"One-to-one coaching for members who want a structured plan, expert correction and measurable progress. Your program is built around your current fitness level and your target.",
items:[
["GOAL ASSESSMENT","Initial consultation to understand your goal, routine, training history and limitations."],
["CUSTOM PROGRAM","Workout structure based on strength, fat loss, muscle building, conditioning or general fitness."],
["1-TO-1 COACHING","Trainer-guided sessions with technique correction, exercise selection and progression."],
["FORM & TECHNIQUE","Detailed guidance on movement patterns, posture, breathing and safe lifting."],
["PROGRESS TRACKING","Regular check-ins for strength, measurements, consistency and training progress."],
["TRAINING GUIDANCE","Warm-up, workout intensity, cooldown and basic lifestyle guidance included."]
]},
group:{
tag:"02 / GROUP CLASSES",title:"GROUP CLASSES",
intro:"High-energy instructor-led sessions that combine structure, music and community. Choose the class style that matches your mood and training goal.",
items:[
["HIIT","Short, intense intervals designed to improve conditioning and burn energy."],
["STRENGTH CIRCUIT","Station-based training combining resistance exercises and full-body movement."],
["CARDIO FITNESS","Fun instructor-led cardio sessions focused on stamina and consistency."],
["CORE & CONDITIONING","Focused work for core strength, stability and overall conditioning."],
["MOBILITY SESSIONS","Guided mobility and stretching to improve movement quality."],
["COMMUNITY ENERGY","Train with a group, stay accountable and keep your motivation high."]
]},
functional:{
tag:"03 / FUNCTIONAL FITNESS",title:"FUNCTIONAL FITNESS",
intro:"Training that prepares your body for real movement. Improve strength, balance, mobility, coordination and athletic performance.",
items:[
["MOVEMENT TRAINING","Squats, pushes, pulls, carries, hinges and rotational movements."],
["FULL-BODY STRENGTH","Compound exercises that train multiple muscle groups together."],
["MOBILITY & BALANCE","Movement drills to improve control, range of motion and stability."],
["CONDITIONING","Sleds, ropes, circuits and bodyweight work for better work capacity."],
["ATHLETIC PERFORMANCE","Agility, coordination, speed and power-focused drills."],
["SCALABLE WORKOUTS","Exercises can be adjusted for beginner, intermediate or advanced levels."]
]},
recovery:{
tag:"04 / RECOVERY & WELLNESS",title:"RECOVERY & WELLNESS",
intro:"Training is only one part of progress. Our recovery approach helps you manage fatigue, improve mobility and return to training ready.",
items:[
["COOLDOWN AREA","Dedicated space for post-workout breathing, stretching and cooldown."],
["GUIDED STRETCHING","Mobility routines targeting commonly tight areas after training."],
["RECOVERY SESSIONS","Low-intensity movement designed to support active recovery."],
["WELLNESS GUIDANCE","Basic guidance around hydration, sleep, routine and recovery habits."],
["MOBILITY WORK","Movement-focused sessions to support flexibility and joint control."],
["RECOVERY PLANNING","Adjust training intensity when your body needs more recovery."]
]}
};

const overlay=$("#detailOverlay"), boxTitle=$("#detailTitle"), tag=$("#detailTag"), intro=$("#detailIntro"), grid=$("#detailGrid");
function openService(key){
 const d=data[key];tag.textContent=d.tag;boxTitle.textContent=d.title;intro.textContent=d.intro;
 grid.innerHTML=d.items.map(x=>`<div class="detail-item"><h4>${x[0]}</h4><p>${x[1]}</p></div>`).join("");
 overlay.classList.add("open");
}
$$(".service-card").forEach(c=>c.addEventListener("click",()=>openService(c.dataset.service)));
$("#detailClose").onclick=()=>overlay.classList.remove("open");
overlay.addEventListener("click",e=>{if(e.target===overlay)overlay.classList.remove("open")});
$("#detailJoin").onclick=()=>{overlay.classList.remove("open");loginScreen.classList.remove("hide")};

const plans=[
{tag:"06 MONTH MEMBERSHIP",title:"6 MONTHS",price:"₹5,000",intro:"A complete six-month membership for building consistency, strength and a sustainable training routine.",items:[
["ACCESS","Full gym access during club operating hours."],["TRAINING","Strength, cardio and functional training equipment."],["CLASSES","Access to available group fitness classes."],["ASSESSMENT","Fitness assessment to understand your starting point."],["TRAINER GUIDANCE","Basic exercise guidance and equipment orientation."],["FACILITIES","Locker facility and clean changing areas."]
]},
{tag:"12 MONTH MEMBERSHIP • BEST VALUE",title:"12 MONTHS",price:"₹9,000",intro:"Our best-value annual membership for members who want a full year to build long-term results.",items:[
["ACCESS","Full gym access with the annual membership."],["CLASSES","Access to all available group fitness classes."],["TRAINER GUIDANCE","Priority trainer guidance and structured support."],["ASSESSMENTS","Quarterly fitness assessment and progress review."],["RECOVERY","Access to recovery and wellness facilities/sessions offered by the club."],["MEMBER BENEFITS","Member-only offers and selected club benefits."]
]}];

const planOverlay=$("#planOverlay");
function openPlan(i){
 const p=plans[i];$("#planTag").textContent=p.tag;$("#planTitle").textContent=p.title;$("#planPrice").textContent=p.price;$("#planIntro").textContent=p.intro;
 $("#planGrid").innerHTML=p.items.map(x=>`<div class="detail-item"><h4>${x[0]}</h4><p>${x[1]}</p></div>`).join("");
 planOverlay.classList.add("open");
}
$$(".plan").forEach((p,i)=>p.addEventListener("click",e=>{if(!e.target.closest("button"))openPlan(i)}));
$$(".join").forEach((b,i)=>b.addEventListener("click",e=>{e.stopPropagation();openPlan(i)}));
$$(".planClose").forEach(b=>b.onclick=()=>planOverlay.classList.remove("open"));
$("#planLogin").onclick=()=>{planOverlay.classList.remove("open");loginScreen.classList.remove("hide")};
$("#tourBtn").onclick=()=>loginScreen.classList.remove("hide");

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");obs.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach((e,i)=>{e.style.transitionDelay=(i%4)*90+"ms";obs.observe(e)});
window.addEventListener("scroll",()=>{const y=scrollY;const bg=$(".hero-bg");if(bg)bg.style.transform=`translateY(${y*.12}px)`});
