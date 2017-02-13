import db from '../db';
import User from './user.model';
import Subject from './subject.model';

let Vote = db.sequelize.define('Vote', {
  date: {
    type: db.Sequelize.DATEONLY,
    defaultValue: db.sequelize.NOW
  }
});

Vote.belongsTo(User);
Vote.belongsTo(Subject);

export default Vote;
