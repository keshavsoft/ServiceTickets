import { GetFuncRepo, PostFuncRepo, PostUploadFuncRepo, PatchFuncRepo } from '../../../Repo/projects/Quotation/Customers.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    res.status(200).json(LocalFromRepo);
};

let PostFunc = (req, res) => {
    let LocalinDataToInsert = req.body.inDataToInsert;
    let LocalFromRepo = PostFuncRepo({ inDataToInsert: LocalinDataToInsert });

    res.status(200).json(LocalFromRepo);
};

let PostUploadFunc = (req, res) => {
    let LocalinDataToInsert = req.body.inDataToInsert;
    let LocalFromRepo = PostUploadFuncRepo({ inDataToInsert: LocalinDataToInsert });

    res.status(200).json(LocalFromRepo);
};

let PatchFunc = (req, res) => {
    let LocalinDataToInsert = req.body.inDataToInsert;
    let LocalinParamUuId = req.params.ParamUuId;

    let LocalFromRepo = PatchFuncRepo({ UuId: LocalinParamUuId, inDataToInsert: LocalinDataToInsert });

    res.status(200).json(LocalFromRepo);
};

export { GetFunc, PostFunc, PostUploadFunc, PatchFunc };