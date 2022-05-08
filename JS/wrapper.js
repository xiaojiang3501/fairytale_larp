gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {

    gsap.to('body', { // LoadingAnimation---------------------
        opacity: 1, duration: 1.3
    }) // /LoadingAnimation---------------------

    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#ImgWrapper",
            start: "0% 0%",
            end: "100% 0%",
            pin: "#ImgWrapper",
            scrub: 2.2,
        }
    })
    LandingPageScrollTrigger
        
    .to('#ImgWrapper #img', { y: -200, }, 0)
    .to('#ImgWrapper #img', { z: 2800, }, 0)

        .from('#codeby', { y : 130, opacity: 0 }, 0.31)
}
//---------------------/Landing Page ScrollTrigger---------------------

window.onload = () => {
    if(window.innerWidth>500){
    LandingPageScrollTrigger()
    }
}

// if(window.innerWidth>500px){

// }