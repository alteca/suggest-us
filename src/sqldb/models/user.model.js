import passportLocalSequelize from 'passport-local-sequelize';
import db from '../db';


let User = passportLocalSequelize.defineUser(db.sequelize, {
  active: db.Sequelize.BOOLEAN
});

export default User;
