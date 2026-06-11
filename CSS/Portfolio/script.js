window.addEventListener("load", () => {
    tsParticles.load("particles-js", {
        particles: {
            number: { value: 70 },
            color: { value: "#64ffda" },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            links: {
                enable: true,
                distance: 150,
                color: "#64ffda"
            },
            opacity: { value: 0.5 }
        }
    });
});

const glow = document.querySelector(".cursor-glow");

if (glow) {
    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX - 175 + "px";
        glow.style.top = e.clientY - 175 + "px";
    });
}


const buttons = document.querySelectorAll(".magnetic");

buttons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x =
            e.clientX -
            rect.left -
            rect.width / 2;

        const y =
            e.clientY -
            rect.top -
            rect.height / 2;

        button.style.transform =
            `translate(${x * 0.2}px, ${y * 0.2}px)`;

    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0,0)";
    });

});

window.addEventListener("load", () => {

    gsap.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1
    });

    gsap.from("#home h1", {
        opacity: 0,
        y: 80,
        duration: 1.2
    });

    gsap.from("#home h2", {
        opacity: 0,
        y: 80,
        duration: 1.4
    });

    gsap.from("#home p", {
        opacity: 0,
        y: 80,
        duration: 1.6
    });

    gsap.from("#home img", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5
    });

});

const tiltCards = document.querySelectorAll(".tilt-card");

if (tiltCards.length > 0) {
    VanillaTilt.init(tiltCards, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3
    });
}

AOS.init({
    duration: 1200,
    once: true
});