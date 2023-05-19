/*Author: Emmeline 
  Last Updated: 4/11/22
  Purpose: hold selections (as bits) of user-selected preferences*/
CREATE TABLE Preferences (
    Username varchar(200) NOT NULL,
    destinations BIT,
    news BIT,
    weather BIT,
    travel_advisory BIT,
    media BIT,
    film BIT,
    literature BIT,
    music BIT,
    podcast BIT,
    PRIMARY KEY (Username)
);
