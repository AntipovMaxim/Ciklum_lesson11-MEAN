    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var path = require('path');
    
    // configuration =================
 
    // connect to mongoDB database 
   
    var dbConfig = require('./db.config')
    mongoose.connect(dbConfig.mLabUrl);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("Successfully connected to the database")
    });


    //Cors
    app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


    //Logger
    app.use(morgan('dev'));  

    //Using bodyParser middleware
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    



    //Webpack stuff
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var config = require('./../webpack.config');
    var compiler = webpack(config);

    //Setting webpack development middleware
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  

    //Static frontend files
    app.use(express.static(path.join(__dirname, '../frontend')));

      

              
                                           // log every request to the console
    //app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    // app.use(bodyParser.json());                                     // parse application/json
    // app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    // app.use(methodOverride());

    // listen (start app with node server.js) ======================================

  
      // API Routes
      app.use('/search', require('./routes/movies'));
      app.use('/comments', require('./routes/comments'));


      app.get('*', function(req, res) {
       res.sendFile(path.join(__dirname, '../frontend/index.html'));
    });
     

    var port = process.env.PORT || 3000; 
    app.listen(port);
    console.log("App listening on port 3000");