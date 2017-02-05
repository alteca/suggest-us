'use strict';

import path from 'path';
import errors from './components/errors';
import { isAllowed } from './middleware/rights';
import UserAPI from './api/user';
import SubjectAPI from './api/subject';
import VoteAPI from './api/vote';

export default function(app) {
  // Insert routes below
  app.use('/api/users', UserAPI);
  app.use('/api/subjects', SubjectAPI);
  app.use('/api/votes', VoteAPI);

  // All undefined asset or api routes should return a 404
  app.route('/*').get(errors[404]);
}
