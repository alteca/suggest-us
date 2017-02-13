import db from '../db';

let Subject = db.sequelize.define('Subject', {
  id: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});


export default Subject;
