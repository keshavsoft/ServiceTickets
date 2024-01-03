import express from 'express';

var router = express.Router();

import {  PostFunc } from '../../controllers/login/GenerateTokenController.js';

router.post('/', PostFunc);

export { router };