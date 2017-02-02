'use strict';

import express from 'express';
import passport from 'passport';
import { serialize, generateToken, login, create } from './auth.controller';

var router = express.Router();

router.post('/signin',
  passport.authenticate('local', {
    session: false
  }), serialize, generateToken, login);

router.post('/signup',
  create,
  passport.authenticate('local', {
    session: false
  }), serialize, generateToken, login);

export default router;
