import express from 'express';

var router = express.Router();

import { GetFunc, PostFunc } from '../../controllers/login/userDataController.js';

router.get('/', GetFunc);
router.post('/', PostFunc);

export { router };