'use strict';

import express from 'express';
import passport from 'passport';
import { serialize, generateToken, login } from './auth.controller';

var router = express.Router();

router.post('/',
  passport.authenticate('local', {
    session: false
  }), serialize, generateToken, login);

export default router;
