import express from 'express';

var router = express.Router();

import { GetFunc } from '../../controllers/admin/SetUp.Controller.js';

router.get('/', GetFunc);

export { router };