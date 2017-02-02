'use strict';

import express from 'express';
import { index, create } from './subject.controller';

var router = express.Router();

router.get('/', index);
router.post('/', create);

export default router;
