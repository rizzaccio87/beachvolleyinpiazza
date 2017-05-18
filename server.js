process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');

//const db = configureMongoose();
const app = configureExpress();
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;