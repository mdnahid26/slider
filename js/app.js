$(function(){
    $('#slider_continar').slick({
        prevArrow:'<i class="fas fa-arrow-alt-circle-left slider_icon slider_icon_left "></i>',
        nextArrow:'<i class="fas fa-arrow-alt-circle-right slider_icon slider_icon_right"></i>',
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        dotsClass:'slider_dots'
    });
    $('#counter').counterUp({
        time:3000,
    })
})