'use strict';

import path from 'path';
import errors from './components/errors';
import { isAllowed } from './middleware/rights';

export default function(app) {
  // Insert routes below
  app.use('/api/auth', isAllowed(), require('./api/auth'));
  // app.use('/api/users', require('./api/user'));

  // All undefined asset or api routes should return a 404
  app.route('/*').get(errors[404]);
}
