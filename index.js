let tl = gsap.timeline();

const body = document.querySelector('body');

setTimeout(() => {
    body.style.webkitFilter='blur(0)';
},1000)

body.style.webkitFilter='blur(50px)';
body.style.transition='ease 0.25s'

// t1.from('img',{
//     delay:0.5,
// })

// tl.from("a svg",{
//     y:-3,
//     repeat:-1,
//     yoyo:true
// })

