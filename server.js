var express     = require('express'),
    path        = require('path');
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    port        = process.env.PORT || 8080,
    app         = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(port, function(){
    console.log('Setia di portal ' + port);
});