import configExpress from './express';
import configSecurity from './secure';
import environment from './environment';

// DB
if (environment.seedDB) {
  require('./seed');
}

// express must be initialized before init routes
export default function(app) {
  configExpress(app);
  configSecurity(app);
}
