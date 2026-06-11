tsParticles.load("particles-js",{
    particles:{
        number:{value:70},
        size:{value:2},
        move:{
            enable:true,
            speed:1
        },
        links:{
            enable:true,
            distance:150
        }
    }
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 175 + "px";
    glow.style.top = e.clientY - 175 + "px";

});