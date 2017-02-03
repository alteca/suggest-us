'use strict';

import express from 'express';
import { index, create } from './vote.controller';

var router = express.Router();

router.get('/', index);
router.post('/', create);

export default router;
