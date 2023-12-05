<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $serviceType = $_POST['serviceType'];
    $purpose = $_POST['purpose'];
    $date1 = $_POST['date1'];
    $date2 = $_POST['date2'];
    $date3 = $_POST['date3'];
    $budget = $_POST['budget'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    // E-Mail an den Kunden senden
    $customerEmail = $_POST['email']; // Die vom Kunden angegebene E-Mail-Adresse
    $customerSubject = 'Vielen Dank für Ihre Anfrage';
    $customerMessage = "Vielen Dank für Ihre Anfrage. Wir werden uns baldmöglichst bei Ihnen melden.";
    $customerHeaders = "From: webmaster@example.com\r\n";
    $customerHeaders .= "Reply-To: webmaster@example.com\r\n"; // Sie können hier die Absender-E-Mail ändern, falls gewünscht
    $customerHeaders .= "X-Mailer: PHP/" . phpversion();

    mail($customerEmail, $customerSubject, $customerMessage, $customerHeaders);

    $to = 'samulun.schindler@hotmail.com';
    $subject = 'Neue Buchungsanfrage';
    $message = "Service-Typ: $serviceType\nVerwendungszweck: $purpose\n";
    $message .= "Termine: $date1, $date2, $date3\nBudget: CHF $budget\n";
    $message .= "E-Mail: $email\nTelefon: $phone\n";

    $headers = "From: webmaster@example.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if(mail($to, $subject, $message, $headers)) {
        $output = "Vielen Dank für Ihre Anfrage. Wir werden uns baldmöglichst bei Ihnen melden.";
    } else {
        $output = "Es gab ein Problem mit Ihrer Anfrage.";
    }
}
?>


<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buchung Multimedia Dienstleistung Samuel Schindler</title>
    <link rel="stylesheet" type="text/css" href="src/styles/styles.css">
</head>
<body>

    <div class="background-image" id="background-image">
      </div>

    <div class="container">
        <div class="form_simulator">
            <p><?php echo $output; ?></p>
        </div>
    </div>

    <script src="src/scripts/script.js"></script>
</body>
</html>
