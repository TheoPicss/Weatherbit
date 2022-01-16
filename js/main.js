const settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/projetapimeteo/weather.php",
    "method": "GET",
    "headers": {}
  };
  
  $.ajax(settings).done(function (response) {
      response = JSON.parse(response);
    console.log(response.data[0].city_name );
    console.log(response.data[0].wind_spd);
    console.log(response.data[0].sunrise);
    console.log(response.data[0].sunset);
    console.log(response.data[0].temp);
    console.log(response.data[0].precip);
    console.log(response.data[0].datetime);

    $("p.ville").text(response.data[0].city_name);
    $("p.taux_vent").text(response.data[0].wind_spd);
    $("p.ensolleiment").text(response.data[0].sunrise);
    $("p.coucher").text(response.data[0].sunset);
    $("p.degres").text(response.data[0].temp);
    $("p.pluie").text(response.data[0].precip);
    $("p.date").text(response.data[0].datetime);
  });