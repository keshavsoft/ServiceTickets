import express from 'express';
var router = express.Router();

import { router as routerTicket } from './Ticketing/Tickets.js';

router.use('/Tickets', routerTicket);

export { router };