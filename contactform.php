<?php

if  (isset($_GET['submit'])) {
    $name = $_GET['name'];
    $lastname = $_GET['last'];
    $mailFrom = $_GET['email'];
    $message = $_GET['message'];

    $mailTo = "nick_east@yahoo.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have new email " .$name.".\n\n".$message;
    mail($mailTo, $mailFrom, $txt, $headers);
    header("Location: index.html?mailsend");
}