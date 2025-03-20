const humbergur = document.querySelector('.humburger');
const mobileMenu = document.querySelector('.mobile-menu');
const icons = document.querySelectorAll('i');

humbergur.addEventListener("click", function (event){
    const isVisible = mobileMenu.getAttribute('data-visible');
    // Hiding 
    if (isVisible == "true") {
        mobileMenu.setAttribute('data-visible', "false");
        icons[0].setAttribute('data-visible', "true");
        icons[1].setAttribute('data-visible', "false");

        // visibility
    }else if (isVisible == "false"){
        mobileMenu.setAttribute('data-visible', "true");
        icons[0].setAttribute('data-visible', "false");
        icons[1].setAttribute('data-visible', "true");
    }
 })
