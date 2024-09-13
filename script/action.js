$('header h1').mouseenter(function () {
    $('header .h1 a').fadeOut()
    $('header .hide').fadeIn()
})

$('header h1').mouseleave(function () {
    $('header .h1 a').fadeIn()
    $('header .hide').fadeOut()
})