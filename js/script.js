function togg(x) {
    x.classList.toggle("change");
}
$(document).ready(function(){
    $('.v_slider').slick({
        prevArrow: '<div class="slick-prev">Prev</div>',
        nextArrow: '<div class="slick-next">Next</div>',
        fade: true,
        cssEase: 'linear'
    });
});
$("#destroy").click(function() {
    $('.main .mid_slider img').css("display", "none");
    $('#destroy').css("display", "none");
});