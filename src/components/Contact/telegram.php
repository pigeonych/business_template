<?php

$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$msg = $_POST['message'];
$token = "5470697198:AAEbIppktHQjVd5FOzdAsEvoDEytB6-9kNA";
$chat_id = "-611403534";
$arr = array(
  'Имя: ' => $name,
  'Фамилия' => $surname
  'Телефон: ' => $phone,
  'Email' => $email,
  'Сообщение:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>