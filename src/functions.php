<?php
function getArticle() {
    $article = rand(10000, 99999);
    return $article;
}
function getFormattedValue($value) {
    return number_format($value, 0, '.', ' ');
}

function getPriceDifference($old, $new) {
    return $old - $new;
}

function getDiscount($old, $new) {
    return round(($new / $old) * 100 - 100);
}

function changeCity()
{
    print_r(123);
}

$article = getArticle();

$oldPrice = 3700;
$oldPriceFormatted = getFormattedValue($oldPrice);
$newPrice = 2290;
$newPriceFormatted = getFormattedValue($newPrice);

$priceDifference = getFormattedValue(getPriceDifference($oldPrice, $newPrice));
$discount = getDiscount($oldPrice, $newPrice);