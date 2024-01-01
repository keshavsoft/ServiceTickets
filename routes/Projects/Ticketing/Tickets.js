import express from 'express';

var router = express.Router();

import { GetFunc, PostFunc, PatchFunc, PostUploadFunc } from '../../../controllers/projects/Ticketing/Tickets.Controller.js';

router.get('/', GetFunc);
router.post('/', PostFunc);
router.post('/Upload', PostUploadFunc);
router.patch('/:ParamUuId', PatchFunc);
// router.route('/').get(GetFunc).post(PostFunc);

export { router };