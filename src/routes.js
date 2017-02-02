'use strict';

import path from 'path';
import errors from './components/errors';
import { isAllowed } from './middleware/rights';
import AuthAPI from './api/auth';
import SubjectAPI from './api/subject';

export default function(app) {
  // Insert routes below
  app.use('/api/auth', AuthAPI);
  // app.use('/api/users', isAllowed(), require('./api/user'));
  app.use('/api/subjects', SubjectAPI);

  // All undefined asset or api routes should return a 404
  app.route('/*').get(errors[404]);
}
