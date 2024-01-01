import express from 'express';

var router = express.Router();

import { PostFunc } from '../../controllers/admin/passwordController.js';

router.post('/', PostFunc);

export { PostFunc };