'use strict';

import express from 'express';
import { index, create, destroy, synthesize } from './vote.controller';

var router = express.Router();

router.get('/', index);
router.get('/synthesize', synthesize);

router.post('/', create);

router.delete('/:userId/:subjectId', destroy);

export default router;
