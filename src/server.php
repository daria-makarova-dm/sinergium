<?php
$article = $_GET["article"];
$size = $_GET["size"];
$quantity = $_GET["quantity"];

$text = 'Артикул: ' . $article . ', размер: ' . $size . ', количество: ' . $quantity;

unlink('file.txt');

$fp = fopen("file.txt", "w");
fwrite($fp, $text);
fclose($fp);