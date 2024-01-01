import express from 'express';

var router = express.Router();

import { GetFunc, PostFunc, PostUploadFunc, PatchFunc } from '../../../controllers/projects/Quotation/Customers.Controller.js';

router.get('/', GetFunc);
router.post('/', PostFunc);
router.post('/Upload', PostUploadFunc);
router.patch('/:ParamUuId', PatchFunc);
// router.route('/').get(GetFunc).post(PostFunc);

export { router };