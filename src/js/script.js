$(document).ready(function(){ 
    
    $('.menu__burger').on('click',function(e){
        $('.menu__burger, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu-items').click(function(event) {
        $('.menu__burger, .menu__body').removeClass('active');
        $('body').removeClass('lock');})
        
    // $('.slider').slick(
    //     {arrows: false, dots: true, fade: true}
    // );

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }
})