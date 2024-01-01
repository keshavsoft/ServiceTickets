// import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/CustomersReadFile.js';
import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/TicketsJsonFile/ReadFile.js';
import { StartFuncNoSync as StartFuncWriteFile } from '../../../KLowDb/KData/JSON/UserData/TicketsJsonFile/WriteFile.js';
import { StartFuncNoSync as StartFuncUpdateFile } from '../../../KLowDb/KData/JSON/UserData/TicketsJsonFile/UpdateFile.js';
import { StartFunc as StartFuncImport } from '../../../KLowDb/KData/JSON/UserData/TicketsJsonFile/Import.js';

let GetFuncDal = () => {
    return StartFuncKLowDb();
};

let PostFuncDal = ({ inDataToInsert }) => {
    return StartFuncWriteFile({ inDataToInsert });
};

let PatchFuncDal = ({ UuId, inDataToInsert }) => {
    return StartFuncUpdateFile({ UuId, inDataToInsert });
};

let PostUploadFuncDal = ({ inDataToInsert }) => {
    return StartFuncImport({ inDataToInsert });
};

export { GetFuncDal, PostFuncDal, PatchFuncDal, PostUploadFuncDal };