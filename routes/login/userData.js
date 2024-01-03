import express from 'express';

var router = express.Router();

import { GetFunc, PostFunc, GetUserIdFunc } from '../../controllers/login/userDataController.js';

router.get('/', GetFunc);
router.get('/:UserId', GetUserIdFunc);
router.post('/', PostFunc);

export { router };