    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var path = require('path');
    
    // configuration =================
 
   // mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

   


    app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


    //Webpack stuff
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var config = require('./../webpack.config');
    var compiler = webpack(config);

    //Setting webpack development middleware
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  


      app.use(express.static(path.join(__dirname, '../frontend')));

      

              
    app.use(morgan('dev'));                                         // log every request to the console
    //app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    // app.use(bodyParser.json());                                     // parse application/json
    // app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    // app.use(methodOverride());

    // listen (start app with node server.js) ======================================

  

    app.get('/test', function(req, res) {
       res.json({ user: 'antipov' });
    });

      app.get('*', function(req, res) {
       res.sendFile(path.join(__dirname, '../frontend/index.html'));
    });

    app.listen(3000);
    console.log("App listening on port 3000");