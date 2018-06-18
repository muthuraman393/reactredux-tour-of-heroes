import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from './src/middleware';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

if (process.env.NODE_ENV === 'development') {
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(express.static(path.resolve(__dirname, 'src')));
}
else if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
}
mongoose.connect('mongodb://localhost:27017/heros');

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

var Schema       = mongoose.Schema;
var ProductSchema   = new Schema({
  id: Number,
  name: String
});
const Notehero = mongoose.model('heroslist', ProductSchema);
//app.get('*', middleware);
var router = express.Router();
router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here'+req);
    next(); // make sure we go to the next routes and don't stop here
});



router.route('/notes').get(function (req, res) {
	console.log("innn1 notes");
  Notehero.find(function (err, notes) {
        if (err) {
            res.status(500).send({message: "Some error ocuured while retrieving notes."});
        }
        res.json(notes);
    });
});

app.use(cors());
app.use('/api', router);
app.listen(3000, '0.0.0.0', (err) => {
  if(err) {
    console.error(err);
  } else {
    console.info('Listening at http://localhost:3000');
  }
});
