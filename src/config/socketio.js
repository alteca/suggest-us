/**
 * Socket.io configuration
 */
'use strict';

import config from './environment';
import SubjectSocket from '../api/subject/subject.socket';
import VoteSocket from '../api/vote/vote.socket';

// When the user disconnects.. perform this
function onDisconnect(socket) {
}

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', data => {
    socket.log(JSON.stringify(data, null, 2));
  });

  // Insert sockets below
  SubjectSocket.register(socket);
  VoteSocket.register(socket);

}

export default function(socketio) {
  socketio.on('connection', function(socket) {
    socket.address = socket.request.connection.remoteAddress +
      ':' + socket.request.connection.remotePort;

    socket.connectedAt = new Date();

    socket.log = function(...data) {
      console.log(`SocketIO ${socket.nsp.name} [${socket.address}]`, ...data);
    };

    // Call onDisconnect.
    socket.on('disconnect', () => {
      onDisconnect(socket);
      socket.log('DISCONNECTED');
    });

    // Call onConnect.
    onConnect(socket);
    socket.log('CONNECTED');
  });
}
