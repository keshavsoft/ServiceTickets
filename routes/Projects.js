import express from 'express';
var router = express.Router();

import { router as routerTicketing } from './Projects/Ticketing.js';
import { RedirectToLogin } from '../common/Jwt/ForLogin/Users.js';


router.use('/Ticketing', RedirectToLogin, routerTicketing);

export { router };