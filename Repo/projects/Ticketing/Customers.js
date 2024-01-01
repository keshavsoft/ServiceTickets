import { GetFuncDal, PostFuncDal, PostUploadFuncDal, PatchFuncDal } from '../../../Dal/projects/Quotation/Customers.js';
import Config from '../../../Config.json'  assert { type: 'json' };

let GetFuncRepo = async () => {
    return await GetFuncDal({
        FromJson: Config.FromJson,
        FromSqlite: Config.FromSqlite
    });
};

let PostFuncRepo = ({ inDataToInsert }) => {
    return PostFuncDal({ inDataToInsert });
};

let PostUploadFuncRepo = ({ inDataToInsert }) => {
    return PostUploadFuncDal({ inDataToInsert });
};

let PatchFuncRepo = ({ UuId, inDataToInsert }) => {
    return PatchFuncDal({ UuId, inDataToInsert });
};

export { GetFuncRepo, PostFuncRepo, PostUploadFuncRepo, PatchFuncRepo };