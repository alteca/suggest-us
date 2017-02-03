'use strict';

import express from 'express';
import passport from 'passport';
import { serialize, generateToken, login, create } from './user.controller';

var router = express.Router();

router.post('/login',
  passport.authenticate('local', {
    session: false
  }), serialize, generateToken, login);

router.post('/join',
  create,
  passport.authenticate('local', {
    session: false
  }), serialize, generateToken, login);

export default router;
