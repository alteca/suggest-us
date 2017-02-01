/**
 * Express configuration
 */

'use strict';
import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import path from 'path';

import config from './environment';

export default function(app) {
  const env = config.env;

  app.set('env', env);
  app.set('view engine', 'ejs');

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());

  if ('production' === env) {
    app.use(morgan('tiny'));
    app.use(errorHandler()); // Error handler - has to be last
  }
  else {
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
}
