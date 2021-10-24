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