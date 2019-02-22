<?php

if  (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $lastname = $_POST['last'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "nick_east@yahoo.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have new email " .$name.".\n\n".$message;
    mail($mailTo, $mailFrom, $txt, $headers);
    header("Location: index.html?mailsend");
}