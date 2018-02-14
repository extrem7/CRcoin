const header = {
    button: false,
    controller: function () {
        $('.toggle-btn').click(function () {
            $('.header').slideToggle();
            $(this).toggleClass('active')
        });
    }
};

function calculator() {
    let tarif = $('#tarif').val();
    let days = $('#days').val();
    let price = $('.range').slider('values', 1);
    let sum = parseInt(tarif * days * price);
    $('#result-1').val(sum);
    $('#result-2').val(sum);
}

$(function () {
    header.controller();
    $(".range").slider({
        range: true,
        min: 10,
        max: 1000,
        step: 10,
        values: [0, 50],
        slide: function () {
            calculator();
        }
    });
    $(".slide").swipe({

        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');

        },
        allowPageScroll: "vertical"

    });
    calculator();
    $('#tarif').change(function () {
        calculator();
    });
    $('#days').change(function () {
        calculator();
    });
});