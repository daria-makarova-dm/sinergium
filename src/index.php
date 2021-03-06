<?php
require('functions.php'); ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sinergium test project</title>
</head>
<body>
    <div class="wrapper">
        <div class="card">
            <section class="card__top">
                <div class="item-photo">
                    <div class="item-photo__image-container">
                        <img class="item-photo__image js-main-photo" src="./assets/images/image6.jpg" alt="" />
                    </div>
                    <div class="item-photo__buttons">
                        <div class="item-photo__button js-photo-button active">
                            <img class="item-photo__button-image js-mini-photo" src="./assets/images/image6.jpg"/>
                        </div>
                        <div class="item-photo__button js-photo-button">
                            <img class="item-photo__button-image js-mini-photo" src="./assets/images/image5.jpg"/>
                        </div>
                        <div class="item-photo__button js-photo-button">
                            <img class="item-photo__button-image js-mini-photo" src="./assets/images/image1.jpg"/>
                        </div>
                    </div>
                </div>
                <form class="details">
                    <div class="details__header">
                        <div class="price">
                            <div class="price__value">
                                <div class="price__old"><?php echo $oldPriceFormatted;?> ₽</div>
                                <div class="price__current"><?php echo $newPriceFormatted;?> ₽</div>
                                <div class="price__saving-wrapper">
                                    <div class="price__saving"><span><?php echo $priceDifference;?> ₽</span> экономии</div>
                                    <div class="price__discount price__discount--mobile"><?php echo $discount;?>%</div>
                                </div>
                            </div>
                            <div class="price__discount price__discount--desktop"><?php echo $discount;?>%</div>
                        </div>
                        <div class="details__info">
                            <div class="article">
                                <span class="article__title">Код товара:</span>
                                <input class="article__output" id="article" type="text" name="article" value="<?php echo $article; ?>" size="5" readonly />
                            </div>
                            <div class="details__store">На складе много</div>
                            <div class="details__lower-price">
                                Нашли дешевле?
                                <a class="details__lower-price-link" href="javascript:void(0)">Снизим цену!</a>
                            </div>
                        </div>
                    </div>
                    <div class="size">
                        <div class="size__title">
                            <span>Выберите размер</span>
                        </div>
                        <div class="size__body">
                            <ul class="size__buttons">
                                <li class="size__button js-size-button active">
                                    <label><input type="radio" name="size" value="s" checked />S</label>
                                </li>
                                <li class="size__button js-size-button">
                                    <label><input type="radio" name="size" value="m" />M</label>
                                </li>
                                <li class="size__button js-size-button">
                                    <label><input type="radio" name="size" value="l" />L</label>
                                </li>
                                <li class="size__button js-size-button disabled">
                                    <label><input type="radio" name="size" value="xl" />XL</label>
                                </li>
                                <li class="size__button js-size-button disabled">
                                    <label><input type="radio" name="size" value="xxl" />XXL</label>
                                </li>
                            </ul>
                            <div id="size-popup" class="size__help js-popup-btn">
                                Подобрать оптимальный размер
                            </div>
                        </div>
                    </div>
                    <div class="quantity">
                        <div class="quantity__selector">
                            <div class="quantity__button quantity__button--minus js-minus"></div>
                            <input class="quantity__input js-quantity" id="quantity" type="text" name="quantity" value="1" readonly />
                            <div class="quantity__button quantity__button--plus js-plus"></div>
                        </div>
                        <button class="quantity__submit js-submit-form" type="submit">В корзину</button>
                    </div>
                    <div class="order">
                        <div class="order__title">Быстрый заказ</div>
                        <div class="order__info">Вы можете на заполнять никаких форм, просто оставьте свой телефон и наш менеджер свяжется с вами</div>
                        <div class="order__block">
                            <div class="order__input-container">
                                <span>+7</span><input class="order__input js-telephone-mask" type="tel" name="tel" placeholder="(___) ___-__-__" />
                            </div>
                            <button class="order__button" type="button">Заказать в один клик</button>
                        </div>
                    </div>
                </form>
            </section>
            <section class="card__body">
                <div class="delivery">
                    <div class="delivery__header">
                        <span>Регион доставки:</span>
                        <div class="delivery__selector js-delivery-city-selector">
                            <span class="delivery__city js-delivery-city-button"></span>
                            <ul class="delivery__city-list js-delivery-city-list">
                                <li class="delivery__city-item js-delivery-city-option chosen" data-value="krasnodar">Краснодар</li>
                                <li class="delivery__city-item js-delivery-city-option" data-value="moskva">Москва</li>
                                <li class="delivery__city-item js-delivery-city-option" data-value="sankt-peterburg">Санкт-Петербург</li>
                                <li class="delivery__city-item js-delivery-city-option" data-value="kazan">Казань</li>
                                <li class="delivery__city-item js-delivery-city-option" data-value="samara">Самара</li>
                                <li class="delivery__city-item js-delivery-city-option" data-value="tver">Тверь</li>
                            </ul>
                        </div>
                    </div>
                    <div class="delivery__table">
                        <div class="delivery__table-row">
                            <div class="delivery__table-option">
                                <a class="delivery__table-link" href="javascript:void(0)">Пункты самовывоза <span></span></a>
                            </div>
                            <div class="delivery__table-days">2 дня</div>
                            <div class="delivery__table-price">165 ₽</div>
                        </div>
                        <div class="delivery__table-row">
                            <div class="delivery__table-option">Курьером</div>
                            <div class="delivery__table-days">2 дня</div>
                            <div class="delivery__table-price">305 ₽</div>
                        </div>
                        <div class="delivery__table-row">
                            <div class="delivery__table-option">Почта России</div>
                            <div class="delivery__table-days">5-14 дней</div>
                            <div class="delivery__table-price">250 ₽</div>
                        </div>
                    </div>
                    <div class="delivery__icons">
                        <div class="delivery__icon delivery__icon--payment">
                            <div></div>
                            <span>Оплата после проверки</span>
                        </div>
                        <div class="delivery__icon delivery__icon--return">
                            <div></div>
                            <span>14 дней на возврат</span>
                        </div>
                    </div>
                    <div class="delivery__feedback">
                        <div class="delivery__feedback-desc">Есть вопросы? Звоните!</div>
                        <div class="delivery__number-wrapper">
                            <a class="delivery__number" href="tel:84951059818">8 (495) 105-98-18</a>
                            <a class="delivery__call" href="javascript:void(0)">Заказать обратный звонок</a>
                        </div>
                    </div>
                </div>
                <div class="description">
                    <div class="description__tabs">
                        <div class="description__tab js-tab active" id="description"><div class="description__tab-wrapper">Описание</div></div>
                        <div class="description__tab js-tab" id="characteristics"><div class="description__tab-wrapper">Характеристики</div></div>
                    </div>
                    <div class="description__content">
                        <div class="description__tab-content js-tab-content active" data-tab="description">
                            <p>Помните веселого персонажа из мультфильма про кунг-фу? Энергичный, немного глуповатый и малость невезучий, По доказал каждому, что его возможности безграничны. Пожалуй, эта панда – настоящий символ настойчивости и упорства. Мы предлагаем вам облачиться в нежную черно-белую шерстку, которая так и просит «обними меня!».</p>
                            <p>Костюм мастера кунг-фу изготовлен из велсофта. Это позволяет коже дышать и не потеть, даже если вам предстоит веселить своих друзей весь день. Пижама застегивается на пуговички и плотно прилегает к рукам и ногам в области манжетов. Голову прикрывает яркая мордочка с ушками, которая завершает образ.</p>
                            <p>Панды – ленивые создания, но очень притягательные. Вам будет сложно отказать в объятиях. Почему бы не воспользоваться этой особенностью с пользой для себя? В таком костюме не важно, где именно будет ваша вечеринка. Главное то, что никто на ней вас точно не забудет.</p>
                        </div>
                        <div class="description__tab-content js-tab-content" data-tab="characteristics">
                            <ul class="description__list">
                                <li class="description__item">
                                    <div class="description__item-name">Материал</div>
                                    <div class="description__item-value">Велсофт</div>
                                </li>
                                <li class="description__item">
                                    <div class="description__item-name">Цвет</div>
                                    <div class="description__item-value description__item-value--color">
                                        <div class="description__item-color" style="background-color: white"></div>
                                        <div class="description__item-color" style="background-color: #c33e16"></div>
                                        <div class="description__item-color" style="background-color: #201d17"></div>
                                    </div>
                                </li>
                                <li class="description__item">
                                    <div class="description__item-name">Для кого</div>
                                    <div class="description__item-value">Унисекс</div>
                                </li>
                                <li class="description__item">
                                    <div class="description__item-name">Тапочки в комплекте</div>
                                    <div class="description__item-value">Нет</div>
                                </li>
                                <li class="description__item">
                                    <div class="description__item-name">Уход</div>
                                    <div class="description__item-value">Деликатная стирка</div>
                                </li>
                                <li class="description__item">
                                    <div class="description__item-name">Молния на попе</div>
                                    <div class="description__item-value">Есть</div>
                                </li>
                                <li class="description__item">
                                    <div class="description__item-name">Хвост</div>
                                    <div class="description__item-value">Есть</div>
                                </li>
                                <li class="description__item">
                                    <div class="description__item-name">Тип застежки</div>
                                    <div class="description__item-value">Пуговицы</div>
                                </li>
                                <li class="description__item">
                                    <div class="description__item-name">Карманы</div>
                                    <div class="description__item-value">Нет</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="popup js-popup" data-popup="size-popup">
            <div class="popup__content">
                <div class="popup__content-wrapper">
                    <h2 class="popup__title">Подобрать оптимальный размер</h2>
                    <div class="popup__body">
                        <div class="popup__parameters">
                            <div class="popup__desc">
                                Не уверены, какой размер подойдет именно вам?<br />
                                Просто укажите свой рост и вес и вы узнаете свой размер.
                            </div>
                            <div class="popup__size-selectors">
                                <div class="popup__size-selector">
                                    <div class="popup__value">
                                        <div class="popup__measure">Рост, см</div>
                                        <input class="popup__value-input js-range-output" id="height" data-value="height-range" type="text" value="190" />
                                    </div>
                                    <div class="popup__range">
                                        <ul class="popup__range-values">
                                            <li class="popup__range-value">145</li>
                                            <li class="popup__range-value">155</li>
                                            <li class="popup__range-value">165</li>
                                            <li class="popup__range-value">175</li>
                                            <li class="popup__range-value">185</li>
                                            <li class="popup__range-value">195</li>
                                        </ul>
                                        <input class="popup__range-input js-range" type="range" id="height-range" value="190"
                                            min="145" max="195">
                                    </div>
                                </div>
                                <div class="popup__size-selector">
                                    <div class="popup__value">
                                        <div class="popup__measure">Вес, кг</div>
                                        <input class="popup__value-input js-range-output" id="weight" data-value="weight-range" type="text" value="80" />
                                    </div>
                                    <div class="popup__range">
                                        <ul class="popup__range-values">
                                            <li class="popup__range-value">40</li>
                                            <li class="popup__range-value">60</li>
                                            <li class="popup__range-value">80</li>
                                            <li class="popup__range-value">100</li>
                                            <li class="popup__range-value">120</li>
                                        </ul>
                                        <input class="popup__range-input js-range" type="range" id="weight-range" value="80"
                                            min="40" max="120" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="popup__result">
                            <div class="popup__result-title">Ваш оптимальный размер:</div>
                            <div class="popup__result-output js-size-result">xxl</div>
                        </div>
                    </div>
                </div>
        
                <button class="popup__submit-btn js-popup-submit" type="button">Выбрать этот размер</button>
                <button class="popup__close-btn js-close-popup" type="button"></button>
            </div>
        </div>
    </div>
</body>
</html>