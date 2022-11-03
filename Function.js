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

// Picture Carousel

let slideIndex = 1;
showSlides(slideIndex);
showSlidesJune(slideIndex);
showSlidesJul(slideIndex);
showSlidesAug(slideIndex);
// showSlidesSep(slideIndex);
// showSlidesOct(slideIndex);

function openMayDetail() {
    const x = document.getElementById("mayDetail");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        showSlides(slideIndex)

    }
}
function openJuneDetail() {
    const x = document.getElementById("juneDetail");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        showSlidesJune(slideIndex)

    }
}
function openJulDetail() {
    const x = document.getElementById("julDetail");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        showSlidesJul(slideIndex)

    }
}
function openAugDetail() {
    const x = document.getElementById("augDetail");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        showSlidesAug(slideIndex)
    }
}
function openSepDetail() {
    const x = document.getElementById("sepDetail");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        showSlidesSep(slideIndex)

    }
}
function openOctDetail() {
    const x = document.getElementById("octDetail");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        showSlidesOct(slideIndex)

    }
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlidesJune(n) {
    showSlidesJune(slideIndex += n);
}
function currentSlideJune(n) {
    showSlidesJune(slideIndex = n);
}


function plusSlidesJul(n) {
    showSlidesJul(slideIndex += n);
}
function currentSlideJul(n) {
    showSlidesJul(slideIndex = n);
}


function plusSlidesAug(n) {
    showSlidesAug(slideIndex += n);
}
function currentSlideAug(n) {
    showSlidesAug(slideIndex = n);
}

function plusSlidesSep(n) {
    showSlidesSep(slideIndex += n);
}
function currentSlideSep(n) {
    showSlidesSep(slideIndex = n);
}

function plusSlidesOct(n) {
    showSlidesOct(slideIndex += n);
}
function currentSlideOct(n) {
    showSlidesOct(slideIndex = n);
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
function showSlidesJune(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesJune");
    let dots = document.getElementsByClassName("dotJune");
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
function showSlidesJul(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesJul");
    let dots = document.getElementsByClassName("dotJul");
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
function showSlidesAug(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesAug");
    let dots = document.getElementsByClassName("dotAug");
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
function showSlidesSep(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesSep");
    let dots = document.getElementsByClassName("dotSep");
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
function showSlidesOct(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesOct");
    let dots = document.getElementsByClassName("dotOct");
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

// Picture Carousel
//may
function modal5() {
    const x = document.getElementById("5Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function modal3() {
    const x = document.getElementById("3Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function wedding() {
    const x = document.getElementById("weddingModal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function dash() {
    const x = document.getElementById("dashModal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    span.onclick = function() {
        x.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function modal4() {
    const x = document.getElementById("4Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
//june
function cat1() {
    const x = document.getElementById("cat1Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function cat2() {
    const x = document.getElementById("cat2Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function cat3() {
    const x = document.getElementById("cat3Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function cat4() {
    const x = document.getElementById("cat4Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function cat5() {
    const x = document.getElementById("cat5Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function cat6() {
    const x = document.getElementById("cat6Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
//Jul
function c1() {
    const x = document.getElementById("c1Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function c2() {
    const x = document.getElementById("c2Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function c3() {
    const x = document.getElementById("c3Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function c4() {
    const x = document.getElementById("c4Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function c5() {
    const x = document.getElementById("c5Modal");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
//Aug
function a1() {
    const x = document.getElementById("a1");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function a2() {
    const x = document.getElementById("a2");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function a3() {
    const x = document.getElementById("a3");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function a4() {
    const x = document.getElementById("a4");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
function a5() {
    const x = document.getElementById("a5");
    const span = document.getElementsByClassName("close")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        x.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === x) {
            x.style.display = "none";
        }
    }
}
//Sep
//Oct

