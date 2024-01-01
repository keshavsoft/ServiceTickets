import { GetFuncDal, GetIdFuncDal, PostFuncDal, PatchFuncDal } from '../../../Dal/projects/Quotation/Items.js';

let GetFuncRepo = () => {
    return GetFuncDal();
};

let GetIdFuncRepo = ({ inId }) => {
    return GetIdFuncDal({ inId });
};

let PostFuncRepo = ({ inDataToInsert }) => {
    return PostFuncDal({ inDataToInsert });
};

let PatchFuncRepo = ({ UuId, inDataToInsert }) => {
    return PatchFuncDal({ UuId, inDataToInsert });
};

export { GetFuncRepo, GetIdFuncRepo, PostFuncRepo, PatchFuncRepo };