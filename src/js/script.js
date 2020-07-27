
@@include('./slick.min.js');

$(document).ready(function(){ 
    
    $('.menu__burger').on('click',function(e){
        $('.menu__burger, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu-items').click(function(event) {
        $('.menu__burger, .menu__body').removeClass('active');
        $('body').removeClass('lock');})
        
    $('.slider').slick(
        {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.slider-arrow'),
        prevArrow: '<button id="prev" type="button" class="slick-prev slick-arrow"><img src="../img/main/slider/left-arrow.png"></img></button>',
        nextArrow: '<button id="next" type="button" class="slick-next slick-arrow"><img src="../img/main/slider/right-arrow.png"></img></button>'
        }
    );

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var jumbotron = document.getElementById("jumbotron");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
            jumbotron.classList.add("sticky_jumbo");
            
        } else {
            navbar.classList.remove("sticky");
            jumbotron.classList.remove("sticky_jumbo");
        }
    }
    
});





