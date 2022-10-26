function redirectDeclaimer() {
    window.location='Declaimer.html';
    // document.write('看来脑子还不错 待着 很快哈');
    setTimeout('redirectDeclaimer()',2000);
}
function Agree() {
    window.location='Timeline.html';
    // document.write('既然你同意了 我就大发慈悲给你看看我整了个啥吧');
    setTimeout('Agree()',2000);
}

function Disagree(){
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


let slideIndex = 1;
showSlides(slideIndex);

function openMayDetail() {
    const x = document.getElementById("mayDetail");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        showSlides(slideIndex)

    }
}


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}