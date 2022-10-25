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
