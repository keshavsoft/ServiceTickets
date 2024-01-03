import { GetFuncRepo, PostFuncRepo, PatchFuncRepo, PostUploadFuncRepo } from '../../../Repo/projects/Ticketing/Tickets.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();

    res.status(200).json(LocalFromRepo);
};

let BSTableGetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();

    res.json(LocalFromRepo.JsonData);
};

let PostFunc = (req, res) => {
    let LocalinDataToInsert = req.body.inDataToInsert;
    let LocalFromRepo = PostFuncRepo({ inDataToInsert: LocalinDataToInsert });

    res.status(200).json(LocalFromRepo);
};

let PatchFunc = (req, res) => {
    let LocalinDataToInsert = req.body.inDataToInsert;
    let LocalinParamUuId = req.params.ParamUuId;

    let LocalFromRepo = PatchFuncRepo({ UuId: LocalinParamUuId, inDataToInsert: LocalinDataToInsert });

    res.status(200).json(LocalFromRepo);
};

let PostUploadFunc = (req, res) => {
    let LocalinDataToInsert = req.body.inDataToInsert;
    let LocalFromRepo = PostUploadFuncRepo({ inDataToInsert: LocalinDataToInsert });

    res.status(200).json(LocalFromRepo);
};

export { GetFunc, PostFunc, PatchFunc, PostUploadFunc, BSTableGetFunc };