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
    delay:4,
    duration:2,
    rotate:180,
    scrollTrigger:{
        trigger:"#main2 .center2",
        scroller:"body",
        // markers: true,
        start: "top 80%",
        end:"top 60%",
        scrub:true
    }
    
})




// ------------------------

const nav1 = document.querySelectorAll('nav ul')
nav1.addEventListener('mouseover',function (){
    // nav1[2].style.top = 0
    nav1[2].innerHTML = "You are on Gallery"
})


nav1.addEventListener('mouseout',function(){

    nav1[2].style.display = ''
})