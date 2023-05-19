Create TABLE Info (
    info_id INT NOT NULL,
    info_category varchar(200) NOT NULL,
    info_link varchar(2000),
    info_image varchar(2000),
    info_country varchar(200) NOT NULL,
    info_body varchar(500),
    info_date DATE,
    PRIMARY KEY (info_id)
);