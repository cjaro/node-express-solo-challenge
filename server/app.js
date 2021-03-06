var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var path = require('path');
var port = 3000;

// initial jokes provided by the client
var jokesList = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "Went to the zoo the other day. It only had one dog in it.",
    punchLine: "It was shih tzu."
  }
];

// static file requests
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


// routes 3:01pm 3:14pm
app.get('/jokes', function(req,res){
  res.send(jokesList);
});

//3:28pm 4:00pm 4:16pm
app.post('/newJoke', function(req, res){
  var newJoke = req.body;
  jokesList.push(newJoke);
  console.log(jokesList);
  res.sendStatus(200);
  res.send(jokesList);
});







// Send index.html file
app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

// Start the server!
app.listen(port, function() {
  console.log("Node listening on port " + port);
});
