/**
 * Subject model events
 */

'use strict';

import { EventEmitter } from 'events';

import sqldb from '../../sqldb';
const Subject = sqldb.Subject;

var SubjectEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SubjectEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Subject.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    SubjectEvents.emit(event + ':' + doc._id, doc);
    SubjectEvents.emit(event, doc);
    done(null);
  }
}

export default SubjectEvents;
