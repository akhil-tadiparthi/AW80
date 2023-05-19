/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Ensure our express framework has been added
var app = express();
const port = 3000;
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
const { response } = require('express');
const res = require('express/lib/response');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var session = require('express-session') //add session framework

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.
		We'll be using `db` as this is the name of the postgres container in our
		docker-compose.yml file. Docker will translate this into the actual ip of the
		container for us (i.e. can't be access via the Internet).
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab,
		we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database. We set this in the
		docker-compose.yml for now, usually that'd be in a seperate file so you're not pushing your credentials to GitHub :).
**********************/
const dbConfig = {
    host: 'db1',
    port: 5432,
    database: 'project_db',
    user: 'postgres',
    password: 'pwd'
};

var db = pgp(dbConfig);


app.use(session({
    secret: "secretkey78787878",
    saveUnitialized: true,
    resave: true
}));

// set the view engine to ejs 
app.use(express.static(__dirname + '/')); //This line is necessary for us to use relative paths and access our resources directory

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', function(request, response) {
    //console.log("inside app get service")
    session = request.session;
    response.sendFile(__dirname + '/Home.html');
});

app.get('/userData', (req, res) => {
    var query = `select * from userData`;
    db.any(query)
        .then(info => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(info);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
});


app.post('/userData/:username/:firstName/:lastName/:password', (req, res) => {
    console.log("in app.post()");
    var insert_query = `INSERT into userData (username, firstName, lastName, pass) VALUES ('${req.params.username}', '${req.params.firstName}', '${req.params.lastName}', '${req.params.password}')`;
    console.log(insert_query);
    db.any(insert_query)
        .then(info => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(info);
        })
        .catch(err => {
            console.log(err);
            res.header("Access-Control-Allow-Origin", "*");
            res.status(500).send("app.post error");
        })
});


app.post('/signin.html', (req, res) => {
    var name = req.body.username;
    var psw = req.body.password;
    var user = `SELECT * FROM userData WHERE username = '${name}' AND  pass = '${psw}';`;
    db.task('get-everything', task => {
            return task.batch([
                task.any(user)
            ]);
        })
        .then(info => {
            if (!info[0][0]) {
                console.log(info)
                console.log("invalid username and password")
                res.redirect('/signin.html')

            } else {
                session = req.session;
                console.log(info)
                session.username = req.body.username;

                res.redirect('/home.html')
            }
        })
        .catch(err => {
            console.log('error', err);
            res.redirect('/signin.html')
        });

});

//Settings get and posts:
app.post('/Settings/user/:username', (req, res) => {
    console.log("in app.post()");
    session = req.session
    var insert_query = `UPDATE userData SET username = '${req.params.username}' WHERE username = '${session.username}';`;
    session.username = req.params.username

    console.log(insert_query);
    db.any(insert_query)
        .then(info => {
            res.header("Access-Control-Allow-Origin", "*");
            console.log(session)
            res.status(200).send(info);

        })
        .catch(err => {
            console.log(err);
            res.header("Access-Control-Allow-Origin", "*");
            res.status(500).send("app.post error");
        })
});

app.post('/Settings/first/:firstName', (req, res) => {
    console.log("in app.post()");
    session = req.session
    var insert_query = `UPDATE userData SET firstName = '${req.params.firstName}' WHERE username = '${session.username}';`;

    console.log(insert_query);
    db.any(insert_query)
        .then(info => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(info);
        })
        .catch(err => {
            console.log(err);
            res.header("Access-Control-Allow-Origin", "*");
            res.status(500).send("app.post error");
        })
});
app.post('/Settings/last/:lastName', (req, res) => {
    console.log("in app.post()");
    session = req.session
    var insert_query = `UPDATE userData SET lastName = '${req.params.lastName}' WHERE username = '${session.username}';`;

    console.log(insert_query);
    db.any(insert_query)
        .then(info => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(info);
        })
        .catch(err => {
            console.log(err);
            res.header("Access-Control-Allow-Origin", "*");
            res.status(500).send("app.post error");
        })
});
app.post('/Settings/pass/:password', (req, res) => {
    console.log("in app.post()");
    session = req.session
    var insert_query = `UPDATE userData SET pass = '${req.params.password}' WHERE username = '${session.username}';`;

    console.log(insert_query);
    db.any(insert_query)
        .then(info => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(info);
        })
        .catch(err => {
            console.log(err);
            res.header("Access-Control-Allow-Origin", "*");
            res.status(500).send("app.post error");
        })
});


app.post('/Media/:mode', (req, res) => {
    console.log("in app.post()");
    session = req.session
    var insert_query = `SELECT * FROM Media WHERE country = '${req.params.mode}';`;

    console.log(insert_query);

    db.any(insert_query)
        .then(info => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(info);
        })
        .catch(err => {
            console.log(err);
            res.header("Access-Control-Allow-Origin", "*");
            res.status(500).send("app.post error");
        })
});