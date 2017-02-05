'use strict';

import express from 'express';
import { index, create, destroy } from './vote.controller';

var router = express.Router();

router.get('/', index);
router.post('/', create);
router.delete('/:userId/:subjectId', destroy);

export default router;
