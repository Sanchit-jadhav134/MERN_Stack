/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");
    const bar = document.querySelector(".loader-bar span");

    bar.style.width = "100%";

    setTimeout(() => {

        loader.style.transition = "0.8s";
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2200);

});

/* =========================
   CURSOR GLOW
========================= */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/* =========================
   FLOATING PARTICLES
========================= */

const particlesContainer =
document.getElementById("particles");

for(let i = 0; i < 80; i++){

    const particle =
    document.createElement("div");

    particle.style.position = "absolute";

    const size =
    Math.random() * 4 + 2;

    particle.style.width =
    size + "px";

    particle.style.height =
    size + "px";

    particle.style.borderRadius = "50%";

    particle.style.background =
    "rgba(255,255,255,.8)";

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.top =
    Math.random() * 100 + "%";

    particle.style.opacity =
    Math.random();

    particlesContainer.appendChild(particle);

    const duration =
    6000 + Math.random() * 7000;

    particle.animate(
        [
            {
                transform:
                "translateY(0px)"
            },
            {
                transform:
                "translateY(-100vh)"
            }
        ],
        {
            duration:duration,
            iterations:Infinity
        }
    );

}

/* =========================
   COUNTERS
========================= */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            +counter.dataset.target;

            let count = 0;

            const speed =
            target / 100;

            const update = () => {

                count += speed;

                if(count < target){

                    counter.innerText =
                    Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText =
                    target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* =========================
   SCROLL REVEAL
========================= */

const revealItems =
document.querySelectorAll(
".feature-card,.stat-card,.testimonial,.cta"
);

const revealObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0px)";

        }

    });

},{
    threshold:0.15
});

revealItems.forEach(item => {

    item.style.transition =
    "0.8s ease";

    revealObserver.observe(item);

});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const nav =
document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.style.background =
        "rgba(5,8,22,.85)";

        nav.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.25)";

    }else{

        nav.style.background =
        "rgba(255,255,255,.04)";

        nav.style.boxShadow =
        "none";

    }

});

/* =========================
   HERO ANIMATION
========================= */

if(typeof gsap !== "undefined"){

    gsap.from(".hero h1",{
        y:80,
        opacity:0,
        duration:1.2
    });

    gsap.from(".hero p",{
        y:50,
        opacity:0,
        duration:1.2,
        delay:0.2
    });

    gsap.from(".hero-buttons",{
        y:50,
        opacity:0,
        duration:1,
        delay:0.4
    });

    gsap.from(".tag",{
        y:-30,
        opacity:0,
        duration:1
    });

}



document.querySelectorAll(".primary-btn,.secondary-btn,.nav-btn")
.forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        circle.classList.add("ripple");

        const size=Math.max(this.clientWidth,this.clientHeight);

        circle.style.width=size+"px";
        circle.style.height=size+"px";

        circle.style.left=
        e.offsetX-size/2+"px";

        circle.style.top=
        e.offsetY-size/2+"px";

        this.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);

    });

});

document.querySelectorAll(".primary-btn,.secondary-btn,.nav-btn")
.forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

        const rect=btn.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;
        const y=e.clientY-rect.top-rect.height/2;

        btn.style.transform=`translate(${x*0.25}px,${y*0.25}px)`;

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translate(0,0)";

    });

});
document.getElementById("startBtn")
.addEventListener("click",()=>{

    document.querySelector("#contact")
    .scrollIntoView({
        behavior:"smooth"
    });

});

document.getElementById("getBtn")
.addEventListener("click",()=>{

    document.querySelector("#contact")
    .scrollIntoView({
        behavior:"smooth"
    });

});
const popup=document.querySelector(".video-popup");

document.querySelector(".secondary-btn")
.addEventListener("click",()=>{

    popup.style.display="flex";

});

document.querySelector(".close-video")
.addEventListener("click",()=>{

    popup.style.display="none";

});
