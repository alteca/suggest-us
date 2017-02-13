/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
import Promise from 'promise';
const { User, Subject, Vote } = sqldb;

User.sync()
.then(() => Subject.sync())
.then(() => Vote.sync())
.then(() => Vote.destroy({ where: {} }))
.then(() => Subject.destroy({ where: {} }))
.then(() => User.destroy({ where: {} }))

.then(() => {
  return new Promise((fulfill, reject) => {
    User.register({
      id: 1,
      username: 'admin',
      active: true
    }, 'admin', () => {
      console.log('finished populating Users');
      fulfill();
    });
  });
})
.then(() => {
  return Subject.bulkCreate([{
    id: 1,
    name: "Redux"
  }, {
    id: 2,
    name: "Nodejs"
  }, {
    id: 3,
    name: "Webpack"
  }, {
    id: 4,
    name: "Angular Universal"
  }, {
    id: 5,
    name: "React"
  }]);
})
.then(() => {
  console.log('finished populating Subjects');
})
.then(() => {
  return Vote.create({
    date: Date.now()
  })
  .then((vote) => {
    vote.setUser(1);
    vote.setSubject(1);

    return vote;
  })
  .then(() => {
    return Vote.create({
      date: Date.now()
    })
  })
  .then((vote) => {
    vote.setUser(1);
    vote.setSubject(2);

    return vote;
  });
})
.then(() => {
  console.log('finished populating Votes');
})
