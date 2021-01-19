<?php

$name = $_POST['client__name'];
$phone = $_POST['client__phone'];
$products = $_POST['client__order'];
$token = "1551147849:AAGnNjVK23gRpoPB-ocEOWANM0aYdvUMtBU";
$chat_id = "-476519443";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Список:' => $products
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: delivery.html');
} else {
  echo "Error";
}
?>