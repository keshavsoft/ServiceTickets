import { GetFuncDal, PostFuncDal, PatchFuncDal, PostUploadFuncDal } from '../../../Dal/projects/Ticketing/Tickets.js';

let GetFuncRepo = () => {
    return GetFuncDal();
};

let PostFuncRepo = ({ inDataToInsert }) => {
    return PostFuncDal({ inDataToInsert });
};

let PatchFuncRepo = ({ UuId, inDataToInsert }) => {
    return PatchFuncDal({ UuId, inDataToInsert });
};

let PostUploadFuncRepo = ({ inDataToInsert }) => {
    return PostUploadFuncDal({ inDataToInsert });
};

export { GetFuncRepo, PostFuncRepo, PatchFuncRepo, PostUploadFuncRepo };