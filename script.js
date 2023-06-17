// // first page 1 start 

gsap.from('#nav h1' , {
    y:-100,
    scale:0,
    delay : 0.5,
    opacity:0,
})

gsap.from('nav li' , {
    x:-300,
    scale:30,
    delay:0.5,
    opacity:0,
    stagger:0.4
})

gsap.from('.center h1',{
    x:-300,
    scale:20,
    opacity:0,
    delay:2,
    stagger:0.4
})

gsap.from('img',{
    x:300,
    delay:3.5,
    opacity:0,
    stagger:0.7,
    rotate:50
})

gsap.from(".footer ul li",{
    x:-1200,
    opacity:0,
    delay:5,
    stagger:0.9
})

// // first page 1 end 

gsap.from(".center2 .cards",{
    x:-500,
    scale:20,
    opacity:0,
    delay:19,
    duration:2,
    rotate:90,
    scrollTrigger:{
        trigger:"#main2 .center2",
        scroller:"body",
        // markers: true,
        start: "top 65%",
        end:"top 30%",
        scrub:true
    }

    
})




// ------------------------

 
window.addEventListener("DOMcontentloaded",function () {
    const flag = 0;
    const linetop = document.querySelector('#line')
    linetop.classList.add('animate')

})