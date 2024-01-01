import express from 'express';
var router = express.Router();

import { router as routerTicketing } from './Projects/Ticketing.js';

router.use('/Ticketing', routerTicketing);

export { router };