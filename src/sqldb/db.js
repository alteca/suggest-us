/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
// db.User = db.sequelize.import('../api/user/user.model');
// db.Subject = db.sequelize.import('../api/subject/subject.model');
// db.Vote = db.sequelize.import('../api/vote/vote.model');

export default db;
