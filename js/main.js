$(".header-menu-burger").click(function() {
    $('.header-menu-burger').toggleClass('active')
    $('.header__list').toggleClass('active')
    $('body').toggleClass('lock')

});