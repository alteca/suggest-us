/**
 * Sequelize initialization module
 */

'use strict';

import db from './db';
import UserModel from './models/user.model';
import SubjectModel from './models/subject.model';
import VoteModel from './models/vote.model';

// Insert models below
db.User = UserModel;
db.Subject = SubjectModel;
db.Vote = VoteModel;


export default db;
