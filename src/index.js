import * as $ from 'jquery'
import Inputmask from "inputmask";
import './styles/main.sass'
import './styles/fonts.sass'
import './styles/variables.sass'

// change the main photo
$(function() {
    let $itemPhoto = $('.js-main-photo');

    let onItemPhotoButtonClick = (e) => {
        $itemPhoto.attr('src', $(e.currentTarget).find('.js-mini-photo').attr('src'));
        $(e.currentTarget).addClass('active');
        $(e.currentTarget).siblings().removeClass('active')
    }

    $(document).on('click', '.js-photo-button', onItemPhotoButtonClick);
});

// choose size
$(function() {

    let onSizeButtonClick = (e) => {

        if ($(e.currentTarget).find('input').is(':checked') && !$(e.currentTarget).hasClass('disabled')) {
            $(e.currentTarget).addClass('active')
                .siblings().removeClass('active')
        }
        
    }

    $(document).on('click', '.js-size-button', onSizeButtonClick);
});

// choose quantity
$(function() {

    let $jsQuantity = $('.js-quantity');
    let val = +$jsQuantity.val();
    
    let onMinusClick = () => {
        if (val > 0) {
            $jsQuantity.val(val = val -  1)
        }
    }

    let onPlusClick = () => {
        if (val < 6) {
            $jsQuantity.val(val = val +  1)
        }
    }

    $(document).on('click', '.js-minus', onMinusClick);
    $(document).on('click', '.js-plus', onPlusClick);
});

// submit form
$(function() {
    let submit = (e) => {
        e.preventDefault();
        let $article = $('#article').val();
        let $size =  $('input[name=size]:checked').val();
        let $quantity = $('#quantity').val();

        $.ajax({
            url: 'server.php?article=' + $article + '&size=' + $size + '&quantity=' + $quantity,
            type: 'get',
            dataType: 'html',
            success: function(data) {
                console.log(data);
            }
        });

        console.log($article, $size, $quantity);
    }

    $(document).on('click', '.js-submit-form', submit);
});

Inputmask("(999) 999-99-99").mask($('.js-telephone-mask'));

// choose delivery city
$(function() {
    let $deliveryCitySelector = $('.js-delivery-city-selector')
    let $deliveryCityButton = $('.js-delivery-city-button');
    let $deliveryCityList = $('.js-delivery-city-list');
    let $chosenCity = $('.js-delivery-city-option.chosen');

    $deliveryCityButton.html($chosenCity.html())

    let onDeliveryBtnClick = (e) => {
        $(e.currentTarget).siblings('.js-delivery-city-list').slideToggle();
    }

    let closeDeliveryList = (e) => {
        let el = '.js-delivery-city-selector';
        if ($(e.target).closest(el).length) return;
        $deliveryCityList.slideUp();
    }

    let chooseCityOption = (e) => {
        let value = $(e.target).attr('data-value')
        let city = $(e.target).html()

        $(e.target).addClass('chosen').siblings().removeClass('chosen');
        $(e.target).closest($deliveryCitySelector).find('.js-delivery-city-button').html(city);
        $(e.target).closest($deliveryCityList).slideUp();
        
    }

    $(document).on('click', '.js-delivery-city-button', onDeliveryBtnClick);
    $(document).on('click', closeDeliveryList);
    $(document).on('click', '.js-delivery-city-option', chooseCityOption);

});

// change tab
$(function() {
    let onTabClick = (e) => {
        let $id = $(e.currentTarget).attr('id');

        $(e.currentTarget).addClass('active').siblings('.js-tab').removeClass('active');
        $(e.currentTarget).closest('.description').find(`.js-tab-content[data-tab=${$id}]`).addClass('active')
            .siblings('.js-tab-content').removeClass('active');
    }

    $(document).on('click', '.js-tab', onTabClick);
});

// open popup
$(function() {

    let openPopup = (e) => {
        let $popup = $(e.currentTarget).attr('id');

        $(`.js-popup[data-popup=${$popup}]`).addClass('opened');
        $('.wrapper').addClass('popup-is-open')
    }

    $(document).on('click', '.js-popup-btn', openPopup);
});

// change range color
$(function() {

    let changeColor = (e) => {
        let value = ($(e.currentTarget).val() - $(e.currentTarget).attr('min'))/($(e.currentTarget).attr('max')-$(e.currentTarget).attr('min'))*100
        $(e.currentTarget).css('background', `linear-gradient(to right, #ec9e21 0%, #ec9e21 ${value}%, #e7e7e7 ${value}%, #e7e7e7 100%)`)
    }

    $(document).on('mousemove', '.js-range', changeColor);
})

// set range inputs values
$(function() {

    let setOutputValue = (e) => {
        let rangeId = $(e.currentTarget).attr('id');
        let output = $(`.js-range-output[data-value=${rangeId}]`);
        let value = $(e.currentTarget).val();

        output.val(value);
    }

    let setRangeValue = (e) => {
        let outputId = $(e.currentTarget).attr('data-value');
        let range = $(`.js-range[id=${outputId}]`);
        let value = $(e.currentTarget).val();

        range.val(value);

        let valueForColor = (range.val() - range.attr('min'))/(range.attr('max')-range.attr('min'))*100
        range.css('background', `linear-gradient(to right, #ec9e21 0%, #ec9e21 ${valueForColor}%, #e7e7e7 ${valueForColor}%, #e7e7e7 100%)`)
    }

    $(document).on('mousemove', '.js-range', setOutputValue);
    $(document).on('change', '.js-range-output', setRangeValue);
    $(document).on('mouseleave', '.js-range-output', setRangeValue);
})

//choose optimal size
$(function() {

    let setSize = (e) => {

        let height = +$('#height').val();
        let weight = +$('#weight').val();
        let resultOutput = $('.js-size-result');
        let size;

        if (height >= 145 && height <= 158) {
            if (weight >= 40 && weight <= 95) {
                size = 's'
            } else if (weight >= 96 && weight <= 120) {
                size = 'm'
            }
        } else if (height >= 159 && height <= 168) {
            if (weight >= 40 && weight <= 62) {
                size = 's'
            } else if (weight >= 63 && weight <= 100) {
                size = 'm'
            } else if (weight >= 101 && weight <= 120) {
                size = 'l'
            }
        } else if (height >= 169 && height <= 178) {
            if (weight >= 40 && weight <= 50) {
                size = 's'
            } else if (weight >= 51 && weight <= 73) {
                size = 'm'
            } else if (weight >= 74 && weight <= 104) {
                size = 'l'
            } else if (weight >= 105 && weight <= 120) {
                size = 'xl'
            }
        } else if (height >= 179 && height <= 188) {
            if (weight >= 40 && weight <= 62) {
                size = 'm'
            } else if (weight >= 63 && weight <= 88) {
                size = 'l'
            } else if (weight >= 89 && weight <= 104) {
                size = 'xl'
            } else if (weight >= 105 && weight <= 120) {
                size = 'xxl'
            }
        } else if (height >= 189 && height <= 195) {
            if (weight >= 40 && weight <= 50) {
                size = 'm'
            } else if (weight >= 51 && weight <= 73) {
                size = 'l'
            } else if (weight >= 74 && weight <= 88) {
                size = 'xl'
            } else if (weight >= 89 && weight <= 120) {
                size = 'xxl'
            }
        }

        resultOutput.html(size);
    }

    $(document).on('change', '.js-range', setSize);
    $(document).on('change', '.js-range-output', setSize);
})

// set optimal size and close popup
$(function() {

    let closePopup = (e) => {

        $(e.currentTarget).closest('.js-popup').removeClass('opened');
        $('.wrapper').removeClass('popup-is-open');
    }

    let setSizeValue = (e) => {

        let value = $('.js-size-result').html();
        let sizeRadio = $(`input[name=size][value=${value}]`);
        let sizeBtn = sizeRadio.closest('.js-size-button');

        if (!sizeBtn.hasClass('disabled')) {
            sizeRadio.attr('checked', 'true');
            sizeBtn.addClass('active').siblings().removeClass('active')
                .find('input[name=size]').removeAttr('checked');
        } else {
            sizeBtn.siblings().removeClass('active')
        }

        closePopup(e);
    }

    $(document).on('click', '.js-popup-submit', setSizeValue);
    $(document).on('click', '.js-close-popup', closePopup);
});

//copy article
$(function () {
    let copyArticle = (e) => {
        let $value = $(e.currentTarget).val();
        navigator.clipboard.writeText($value)
            .then(() => {
                navigator.clipboard.readText()
                    .then(text => {
                        alert(text);
                    })
                    .catch(err => {
                        console.log('Something went wrong', err);
                    });
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });
    }

    $(document).on('click', '#article', copyArticle);
});