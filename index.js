var express = require('express');
var unirest = require('unirest'); 
var app = express();
var path = require('path');
var hbs = require('hbs');
var http = require('http').Server(app);
var io = require('socket.io')(http)

// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs');

//---------------skyscanner session ---------------//



// -------------- serve static folders -------------- //
app.use('/client', express.static(path.join(__dirname, 'client')))


app.get('/', function(req,res){
    res.render('landing', {});
});



var listener = http.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
