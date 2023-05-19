function mediabutton(country) {





    const mode = sessionStorage.getItem('favorite');
    console.log(mode);

    var url = `http://localhost:3000/Media/${mode}`;
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',

        success: function(data) {

            $('#test').append("<p>" + data[0].country + "</p>");


            $('#button_destinations').append("<p>" + data[0].destinations + "</p>");
            var yourElement_dest = document.getElementById('button_destinations');
            yourElement_dest.setAttribute('href', data[0].destinations_link);

            $('#button_news').append("<p>" + data[0].news + "</p>");
            var yourElement_news = document.getElementById('button_news');
            yourElement_news.setAttribute('href', data[0].news_link);

            $('#button_weather').append("<p>" + data[0].weather + "</p>");
            var yourElement_news = document.getElementById('button_weather');
            yourElement_news.setAttribute('href', data[0].weather_link);

            $('#button_Travel').append("<p>" + data[0].travel_advisory + "</p>");
            var yourElement_travels = document.getElementById('button_Travel');
            yourElement_travels.setAttribute('href', data[0].travel_advisory_link);

            $('#button_film').append("<p>" + data[0].film + "</p>");
            var yourElement_film = document.getElementById('button_film');
            yourElement_film.setAttribute('href', data[0].film_link);

            $('#button_literature').append("<p>" + data[0].literature + "</p>");
            var yourElement_literature = document.getElementById('button_literature');
            yourElement_literature.setAttribute('href', data[0].literature_link);

            $('#button_music').append("<p>" + data[0].music + "</p>");
            var yourElement_music = document.getElementById('button_music');
            yourElement_music.setAttribute('href', data[0].music_link);

            $('#button_podcast').append("<p>" + data[0].podcast + "</p>");
            var yourElement_podcast = document.getElementById('button_podcast');
            yourElement_podcast.setAttribute('href', data[0].podcast_link);


        },
        error: function(err) {
            $(window.alert("Unable to register"));
        }
    })
}