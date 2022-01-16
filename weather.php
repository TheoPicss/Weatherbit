<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.weatherbit.io/v2.0/current?key=96b8d360c7ab4582a38227e3a75a84b6&city=CHAMBERY&country=FR&lang=fr",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => "",
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}