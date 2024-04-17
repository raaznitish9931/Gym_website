function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimation()


function navbarAnimation(){
    gsap.to("#nav-part1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
        },
      });
    
    gsap.to("#nav-part2 #links", {
        transform: "translateY(-100%)",
        opacity:0,
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
        },
      });
    
}

navbarAnimation()


function videoconAnimation() {
    var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter", function(){
   gsap.to(playbtn ,{
    scale:1,
    opacity: 1,
   })
})


videocon.addEventListener("mouseleave", function(){
   gsap.to(playbtn ,{
    scale:0,
    opacity: 0,
   })
})
videocon.addEventListener("mousemove", function(dets){
   gsap.to(playbtn,{
    left:dets.x-70,
    top:dets.y-50
})
})
}
videoconAnimation()

function loadingAnimation(){
  

    gsap.from("#page1 #video-container ",{
        scale: 0.9,
        opacity:0,
        delay: 1.3,
        duration: 0.3,
    })
}


loadingAnimation()

function cursorAnimation(){
    
document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
     left:dets.x,
     top:dets.y,
 })
 })
 

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)",
        });
    });
    elem.addEventListener("mouseleave", function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)",
        });
    });
})

}
cursorAnimation()




Shery.textAnimate("#page1 h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 80,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.17,
});


Shery.mouseFollower({

});




Shery.makeMagnet("#links a , #icons i , .links-section a" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});







