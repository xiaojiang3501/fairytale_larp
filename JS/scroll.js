
// 卷軸動畫
document.addEventListener('scroll', function(e) {

   console.log(window.scrollY);
   
    if(window.scrollY >= 600){
        document.getElementsByClassName("title")[0].style.opacity = 1;
    }
    if(window.scrollY >= 1300){
        document.getElementsByClassName("title")[1].style.opacity = 1;
    }
    if(window.scrollY >= 2400){
        document.getElementsByClassName("title")[2].style.opacity = 1;
    }
    if(window.scrollY >= 780){
        for(let i=0; i<document.getElementsByClassName("b").length;i++){
            document.getElementsByClassName("b")[i].style.opacity = 1;
        }
    }
    if(window.scrollY >= 650){
        document.getElementsByClassName("c")[0].style.opacity = 1;
    }
    if(window.scrollY >= 700){
        document.getElementsByClassName("c")[1].style.opacity = 1;
    }
    if(window.scrollY >= 800){
        document.getElementsByClassName("c")[2].style.opacity = 1;
    }
    if(window.scrollY >= 900){
        document.getElementsByClassName("c")[3].style.opacity = 1;
    }
    if(window.scrollY >= 1000){
        document.getElementsByClassName("c")[4].style.opacity = 1;
    }
    if(window.scrollY >= 650){
        document.getElementsByClassName("d")[0].style.opacity = 1;
    }
    if(window.scrollY >= 750){
        document.getElementsByClassName("d")[1].style.opacity = 1;
    }
    if(window.scrollY >= 850){
        document.getElementsByClassName("d")[2].style.opacity = 1;
    }
    if(window.scrollY >= 950){
        document.getElementsByClassName("d")[3].style.opacity = 1;
    }
    if(window.scrollY >= 1050){
        document.getElementsByClassName("d")[4].style.opacity = 1;
    }
});
