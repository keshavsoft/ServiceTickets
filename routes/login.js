import express from 'express';
var router = express.Router();

import { RedirectToLogin } from '../common/Jwt/ForLogin/Admin.js';

import { router as routerlogin } from './login/userData.js';

router.use('/userData', RedirectToLogin, routerlogin);

export { router };