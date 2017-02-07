import configExpress from './express';
import configSecurity from './secure';
import configSocketio from './socketio';
import environment from './environment';

// DB
if (environment.seedDB) {
  require('./seed');
}

// express must be initialized before init routes
export default function(app, server) {
  configExpress(app);
  configSecurity(app);

  var socketio = require('socket.io')(server, {
    serveClient: environment.env !== 'production',
    path: '/socket.io-client'
  });
  configSocketio(socketio);

}
