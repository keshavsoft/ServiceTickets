// import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/CustomersReadFile.js';
import { StartFuncSync as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/ItemsJsonFile/ReadFile.js';
import { StartFuncNoSync as StartFuncWriteFile } from '../../../KLowDb/KData/JSON/UserData/ItemsJsonFile/WriteFile.js';
import { StartFuncNoSync as StartFuncUpdateFile } from '../../../KLowDb/KData/JSON/UserData/ItemsJsonFile/UpdateFile.js';
import { StartFuncNoSync as StartFuncPickById } from '../../../KLowDb/KData/JSON/UserData/ItemsJsonFile/PickById.js';

let GetFuncDal = () => {
    return StartFuncKLowDb();
};

let GetIdFuncDal = ({ inId }) => {
    return StartFuncPickById({ inId });
};

let PostFuncDal = ({ inDataToInsert }) => {
    return StartFuncWriteFile({ inDataToInsert });
};

let PatchFuncDal = ({ UuId, inDataToInsert }) => {
    return StartFuncUpdateFile({ UuId, inDataToInsert });
};

export { GetFuncDal, GetIdFuncDal, PostFuncDal, PatchFuncDal };