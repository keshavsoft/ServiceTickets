import express from 'express';

var router = express.Router();

import { GetFunc, PostFunc, PatchFunc, PostUploadFunc, BSTableGetFunc } from '../../../controllers/projects/Ticketing/Tickets.Controller.js';

router.get('/', GetFunc);
router.get('/ForBSTable', BSTableGetFunc);
router.post('/', PostFunc);
router.post('/Upload', PostUploadFunc);
router.patch('/:ParamUuId', PatchFunc);
// router.route('/').get(GetFunc).post(PostFunc);

export { router };