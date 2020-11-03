<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['textarea'];

    $mailTo = "admin@ivaylotsochev.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;


    mail($mailTo, $subject, $txt, $headers);

    header("Location: contact.html?mailsend");
    echo "Thank You!";
}

?>

<!-- // emails TO gmail won't work, the email needs to be send to another mailbox and then forwarded to gmail -->

