$(function () {
    let isGreen = true;

    $('.banner__button').on('click',function () {
        $(this).css('background-color', function () {
            if (isGreen) {
                $(this).css('background-color', '#CC292B');
            } else {
                $(this).css('background-color', '#7AB800');
            }
            isGreen = !isGreen;
        });
    });
});
