<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "hello@squirly.com.au";  // Your email address
    $subject = "Someone from Squirly.com.au reached out!";

    // Sanitize input
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    // Email to you
    $body = "New message from your website contact form, who dis?:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";
    $headers = "From: $email";

    $mailSent = mail($to, $subject, $body, $headers);

    // ✅ Auto-reply to the sender
    $reply_subject = "Thanks for contacting Squirly!";
    $reply_message = "Hi $name,\n\nThanks for getting in touch! I'll get a wriggle on to get back to you soon.\n\nCheers,\nSquirly";
    $reply_headers = "From: hello@squirly.com.au";

    $autoReplySent = mail($email, $reply_subject, $reply_message, $reply_headers);

    if ($mailSent && $autoReplySent) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send.";
    }
}
?>
