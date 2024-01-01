import express from 'express';
var router = express.Router();

import { router as routerlogin } from './admin/Password.js';
import { router as routerSetUp } from './admin/SetUp.js';

router.use('/Password', routerlogin);
router.use('/SetUp', routerSetUp);

export { router };