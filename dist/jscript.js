$(document).ready(() => {
    $('.line-btn').on('click', event => {
        $(event.currentTarget).toggleClass('close');
        $('.menu').toggleClass('show');
        $('.zindex').toggleClass('absolute');

    });

})