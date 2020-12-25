// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
const btnRef = document.querySelector('#myBtn');
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btnRef.style.display = "block";
    } else {
        btnRef.style.display = "none";
    }
};
btnRef.addEventListener('click', topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};