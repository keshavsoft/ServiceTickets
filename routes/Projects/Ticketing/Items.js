import express from 'express';

var router = express.Router();

import { GetFunc, PostFunc, PatchFunc, GetIdFunc } from '../../../controllers/projects/Quotation/Items.Controller.js';

router.get('/', GetFunc);
router.get('/:Id', GetIdFunc);
router.post('/', PostFunc);
router.patch('/:ParamUuId', PatchFunc);
// router.route('/').get(GetFunc).post(PostFunc);

export { router };