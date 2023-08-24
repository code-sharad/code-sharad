let tl = gsap.timeline();

const body = document.querySelector('body');

body.style.webkitFilter='blur(50px)';
body.style.transition=' 0.5s'

setTimeout(() => {
    body.style.webkitFilter='blur(0)';
},800)



tl.from("a svg",{
    y:-3,
    repeat:-1,
    yoyo:true
})

