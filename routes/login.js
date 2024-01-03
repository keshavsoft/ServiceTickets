import express from 'express';
var router = express.Router();

// import { RedirectToLogin } from '../common/Jwt/ForLogin/Admin.js';

import { router as routerlogin } from './login/userData.js';
import { router as GenerateToken } from './login/GenerateToken.js';

// router.use('/userData', RedirectToLogin, routerlogin);
router.use('/userData', routerlogin);
router.use('/GenerateToken', GenerateToken);

export { router };