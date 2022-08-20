function openNav() {    
    document.getElementById("sidenav").style.width = "100%";
    document.getElementById("main-body").style.paddingTop= "268px";
    
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main-body").style.paddingTop= "0";

    
}

var slideIndex = 0;
showSlides();
function plusSlides() {
    slideIndex++;  
    showSlides();
}
function minusSlides() {
    slideIndex--;  
    showSlides();
}
function currentSlide() {
    slideIndex++;
    showSlides();
}
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(slideIndex>=3){
        slideIndex=0;
    }
    if(slideIndex<0){
        slideIndex=2;
    }   
    if (slideIndex == 0) {
        slides[0].style.display = "block";
        dots[0].className += " active";
        slides[1].style.display = "none";
        dots[1].className = dots[1].className.replace(" active", "");
        slides[2].style.display = "none";
        dots[2].className = dots[2].className.replace(" active", "");
    }        
    if(slideIndex == 1){
        slides[1].style.display = "block";
        dots[1].className += " active";
        slides[0].style.display = "none";
        dots[0].className = dots[0].className.replace(" active", "");
        slides[2].style.display = "none";
        dots[2].className = dots[2].className.replace(" active", "");
    }
    if(slideIndex == 2){
        slides[2].style.display = "block";
        dots[2].className += " active";
        slides[0].style.display = "none";
        dots[0].className = dots[0].className.replace(" active", "");
        slides[1].style.display = "none";
        dots[1].className = dots[1].className.replace(" active", "");
    }
}
