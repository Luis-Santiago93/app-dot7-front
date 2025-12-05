<?php

$isLocal = in_array($_SERVER['SERVER_NAME'], ["localhost", "127.0.0.1"]);

$AUTH_API = $isLocal
    ? "http://localhost:5000/api/auth"
    : "https://security.dot7.com.mx/api/auth";

$APP_ID_REQUIRED = 2;


$accessToken  = $_COOKIE["access_token"]  ?? null;
$refreshToken = $_COOKIE["refresh_token"] ?? null;

if (!$accessToken) {
    header("Location: index.php");
    exit;
}

$verify = apiPost("$AUTH_API/verify-token", [
    "token" => $accessToken
]);

if (isset($verify["valid"]) && $verify["valid"] === true) {

    if (userHasApp($verify["claims"]["apps"], $APP_ID_REQUIRED)) {
        return;
    }

    header("Location: index.php");
    exit;
}


if (isset($verify["error"]) && $verify["error"] === "token expired" && $refreshToken) {

    $refresh = apiPostAuth("$AUTH_API/refresh", $refreshToken);

    if (!empty($refresh["access_token"])) {

        setcookie("access_token", $refresh["access_token"], time() + 3600, "/", "", false, true);


        $verify2 = apiPost("$AUTH_API/verify-token", [
            "token" => $refresh["access_token"]
        ]);

        if (isset($verify2["valid"]) && $verify2["valid"] === true) {

            if (userHasApp($verify2["claims"]["apps"], $APP_ID_REQUIRED)) {
                return; 
            }

            header("Location: index.php");
            exit;
        }
    }
}

header("Location: index.php");
exit;

function apiPost($url, $data)
{
    $ch = curl_init($url);

    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => ["Content-Type: application/json"],
        CURLOPT_POSTFIELDS => json_encode($data),
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true) ?? [];
}

function apiPostAuth($url, $token)
{
    $ch = curl_init($url);

    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            "Authorization: Bearer $token",
            "Content-Type: application/json"
        ],
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true) ?? [];
}

function userHasApp($apps, $requiredAppId)
{
    if (!is_array($apps)) return false;

    foreach ($apps as $app) {
        if ($app["app_id"] == $requiredAppId) {
            return true;
        }
    }

    return false;
}
