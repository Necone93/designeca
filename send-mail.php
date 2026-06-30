<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, bool $success, string $message): void
{
    http_response_code($status);
    echo json_encode(
        ['success' => $success, 'message' => $message],
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Method not allowed.');
}

// Hidden field: bots commonly fill it, people never see it.
if (trim((string) ($_POST['_honey'] ?? '')) !== '') {
    respond(200, true, 'Message accepted.');
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$service = trim((string) ($_POST['service'] ?? $_POST['project'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$requestedSubject = trim((string) ($_POST['subject'] ?? 'Novi upit sa sajta'));

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, false, 'Unesite ispravnu email adresu.');
}

if (strlen($name) > 120 || strlen($phone) > 60 || strlen($service) > 160 || strlen($message) > 5000) {
    respond(422, false, 'Uneti podaci su predugački.');
}

$allowedSubjects = [
    'Novi upit sa sajta Designeca',
    'Novi upit za izradu sajta',
];
$subject = in_array($requestedSubject, $allowedSubjects, true)
    ? $requestedSubject
    : 'Novi upit sa sajta Designeca';

$clean = static function (string $value): string {
    return str_replace(["\r", "\n"], ' ', $value);
};
$safeName = $clean($name !== '' ? $name : 'Nije navedeno');
$safePhone = $clean($phone !== '' ? $phone : 'Nije naveden');
$safeService = $clean($service !== '' ? $service : 'Nije navedeno');
$safeEmail = $clean($email);

$body = implode("\n", [
    'Novi upit sa sajta designeca.rs',
    '',
    'Ime i prezime: ' . $safeName,
    'Email: ' . $safeEmail,
    'Telefon: ' . $safePhone,
    'Tip projekta: ' . $safeService,
    '',
    'Poruka:',
    $message !== '' ? $message : 'Nije uneta.',
    '',
    'Poslato: ' . date('d.m.Y. H:i'),
]);

$headers = [
    'From: Designeca sajt <no-reply@designeca.rs>',
    'Reply-To: ' . $safeEmail,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = mail(
    'info@designeca.rs',
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers)
);

if (!$sent) {
    error_log('Designeca contact form: mail() returned false.');
    respond(500, false, 'Poruka trenutno ne može da se pošalje.');
}

respond(200, true, 'Upit je uspešno poslat.');
