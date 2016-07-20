<?php

$name = ""
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "klich_mitchell@icloud.com";

mail ($to, $subject, $message, $name;
echo "Your Message has been sent";


?>