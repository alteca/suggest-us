/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var User = sqldb.User;
var Subject = sqldb.Subject;

User.sync()
.then(() => User.destroy({ where: {} }))
.then(() => {
  User.register({
    id: 1,
    username: 'admin',
    active: true
  }, 'admin', () => {
    console.log('finished populating users');
  });
});

Subject.sync()
  .then(() => {
    return Subject.destroy({ where: {}});
  })
  .then(() => {
    return Subject.bulkCreate([{
      name: "Redux"
    }, {
      name: "Nodejs"
    }, {
      name: "Webpack"
    }, {
      name: "Angular Universal"
    }, {
      name: "React"
    }]);
  })
  .then(() => {
    console.log('finished populating subjects');
  });
