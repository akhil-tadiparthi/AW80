CREATE TABLE IF NOT EXISTS userData (
    username varchar(200) NOT NULL,
    firstName varchar(200) NOT NULL,
    lastName varchar(200) NOT NULL,
    pass varchar(200) NOT NULL,
    PRIMARY KEY (Username)
);

CREATE TABLE Media (
    country varchar(200),
    destinations varchar(200),
    destinations_link varchar(2000),
    news varchar(200),
    news_link varchar(2000),
    weather varchar(200),
    weather_link varchar(2000),
    travel_advisory varchar(200),
    travel_advisory_link varchar(2000),
    film varchar(200),
    film_link varchar(2000),
    literature varchar(200),
    literature_link varchar(2000),
    music varchar(200),
    music_link varchar(2000),
    podcast varchar(200),
    podcast_link varchar(2000),
    PRIMARY KEY (country)
);


INSERT INTO Media
VALUES ('Australia', 'Sydney Opera House', 'https://www.sydneyoperahouse.com/', 'News.com.au', 'https://www.news.com.au/', 'Weather', 'https://www.timeanddate.com/weather/australia', 'Travel Advisory', 'https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Australia.html', 'Lion', 'https://www.imdb.com/title/tt3741834/?ref_=ttls_li_tt', 'Voss', 'https://www.amazon.com/Voss-Penguin-Classics-Patrick-White/dp/014310568X', 'Playlist of Popular Australian Songs', 'https://www.youtube.com/watch?v=8M_P_xX9Cmw&list=PLHT3NvmNCX4tsXlxA3sagdZb_JwZ2Vqwv', 'Stuff You Should Know', 'https://www.iheart.com/podcast/105-stuff-you-should-know-26940277/');

INSERT INTO Media
VALUES ('Brazil', 'Christ the Redeemer', 'https://www.iheartbrazil.com/christ-the-redeemer-statue/', 'Brazilian.report', 'https://brazilian.report/', 'Weather', 'https://www.timeanddate.com/weather/brazil', 'Travel Advisory', 'https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Brazil.html', 'City of God', 'https://www.imdb.com/title/tt0317248/?ref_=ttls_li_tt', 'My German Brother', 'https://www.amazon.com/gp/product/0374161208/ref=as_li_tf_il?ie=UTF8&tag=boorio-20&linkCode=as2&camp=217145&creative=399349&creativeASIN=0374161208', 'Playlist of Popular Brazilian Songs', 'https://www.youtube.com/watch?v=hcm55lU9knw&list=PL_bKAgO9uCN02OR1Tr59xH0SsxTCbF5i_', 'Brazil Unfiltered', 'https://soundcloud.com/brazilunfiltered');

INSERT INTO Media
VALUES ('China', 'Great Wall', 'https://www.chinahighlights.com/greatwall/', 'South China Morning Post', 'https://www.scmp.com', 'Weather', 'https://www.timeanddate.com/weather/china', 'Travel Advisory', 'https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html', 'Crouching Tiger, Hidden Dragon', 'https://www.imdb.com/title/tt0190332/?ref_=ttls_li_tt', 'The Wedding Party', 'https://www.amazon.com/Wedding-Party-Liu-Xinwu/dp/1542044790', 'Playlist of Popular Chinese Songs', 'https://www.youtube.com/watch?v=UBySINroNkw&list=PLMy7_EG_GObR-qnwOn4wNhnS_7xHj1O1W', 'ChinesePod', 'https://www.chinesepod.com/');

INSERT INTO Media
VALUES ('Nigeria', 'Lekki Conservation Center', 'https://www.ncfnigeria.org/projects/lekki-conservation-centre', 'Vanguard', 'https://www.vanguardngr.com/', 'Weather', 'https://www.timeanddate.com/weather/nigeria', 'Travel Advisory', 'https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Nigeria.html', 'King of Boys', 'https://www.imdb.com/title/tt8329618/', 'My Sister, the Serial Killer', 'https://www.amazon.com/My-Sister-Serial-Killer-Novel/dp/0525564209/ref=tmm_pap_title_0?_encoding=UTF8&qid=1562616939&sr=1-3&tag=offtheshelf-20', 'Playlist of Popular Nigerian Songs', 'https://www.youtube.com/watch?v=mV_zjss2nlY&list=PLPhfFdRHR-cxwPx9P9LOEGkONKreaMy3d', 'I Said What I Said', 'https://isaidwhatisaidpodcast.com/');

INSERT INTO Media
VALUES ('United Kingdom', 'Big Ben', 'https://www.visitlondon.com/things-to-do/sightseeing/london-attraction/big-ben', 'BBC', 'https://www.bbc.com/', 'Weather', 'https://www.metoffice.gov.uk/public/weather/forecast/map#?map=SignificantWeather&zoom=5&lon=-4.00&lat=55.01&fcTime=1649682000', 'Travel Advisory', 'https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedKingdom.html', 'Goldfinger', 'https://www.imdb.com/title/tt0058150/', 'The Lion, the Witch, and the Wardrobe', 'https://www.amazon.com/Lion-Witch-Wardrobe-Celebration-Chronicles/dp/0061715050/ref=sr_1_1?keywords=the+lion+the+witch+and+the+wardrobe&qid=1648752282&refinements=p_n_feature_browse-bin%3A2656020011&rnid=618072011&s=books&sprefix=the+lion+%2Cstripbooks%2C126&sr=1-1', 'Playlist of Popular British Songs', 'https://www.youtube.com/watch?v=OMOGaugKpzs&list=PLS9dM7SntWZOISAepgSx4ybQz0xCvzXPG', 'No Such Thing as a Fish', 'https://www.nosuchthingasafish.com/');

INSERT INTO Media
VALUES ('United States', 'Statue of Liberty', 'https://www.nps.gov/stli/index.htm', 'New York Times', 'https://www.nytimes.com/', 'Weather', 'https://weather.com/?cm_ven=PS_GGL_GeoEx_04012019_1&par=MK_GGL&tpcc=mktg-search-Google-acquisition&gclid=CjwKCAjwo8-SBhAlEiwAopc9W_FI2vWZZp0utl1fet46RbhVQnvLKTieI8X_oSgFoFlOtc8FCpJNcRoCxKIQAvD_BwE', 'Travel Advisory', 'NONE', 'Die Hard', 'https://www.imdb.com/title/tt0095016/', 'The Great Gatsby', 'https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567', 'Playlist of Popular American Songs', 'https://www.youtube.com/watch?v=lZD4ezDbbu4&list=PL2A80D8E0BD7A5F92', 'My Favorite Murder', 'https://myfavoritemurder.com/');
