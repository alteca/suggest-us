/**
 * Vote model events
 */

'use strict';

import { EventEmitter } from 'events';
import sqldb from '../../sqldb';
const Vote = sqldb.Vote;

var VoteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
VoteEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Vote.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    VoteEvents.emit(event + ':' + doc._id, doc);
    VoteEvents.emit(event, doc);
    done(null);
  }
}

export default VoteEvents;
