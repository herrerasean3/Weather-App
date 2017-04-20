console.log('main.js loaded.');



$(document).ready(function () {
    
    $('#submit').on('click', function(e) {
        let zip = $('#zip-code').val();
        let cCode = $('#c-code').val();
        let targetURL = "https://accesscontrolalloworiginall.herokuapp.com/" + "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + cCode + "&units=imperial&appid=3ab6ed465bd21cbac1831230b5950cec";
        
        e.preventDefault();
        console.log('Retrieving data from Weather API.');
        $.ajax({
            type: "GET",
            url: targetURL
        }).done(function(res) {
            
            $('#city').text(res.name)
            $('#c-temp').text(res.main.temp); $('#weather').text(res.weather[0].description);
            $('#max-temp').text(res.main.temp_max);
            $('#min-temp').text(res.main.temp_min);
            if (res.main.temp > 90) {
                $('#c-temp').addClass('hot');
                $('#c-temp').removeClass('cold')
            } else if (res.main.temp < 40) {
                $('#c-temp').addClass('cold');
                $('#c-temp').removeClass('hot');
            }
        });
    });
});