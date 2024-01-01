// import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/CustomersReadFile.js';
import { StartFuncSync as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/CustomersJsonFile/ReadFile.js';
import { StartFuncNoSync as StartFuncWriteFile } from '../../../KLowDb/KData/JSON/UserData/CustomersJsonFile/WriteFile.js';
import { StartFunc as StartFuncImport } from '../../../KLowDb/KData/JSON/UserData/CustomersJsonFile/Import.js';
import { StartFuncNoSync as StartFuncUpdateFile } from '../../../KLowDb/KData/JSON/UserData/CustomersJsonFile/UpdateFile.js';
import { StartFunc as StartFuncKSequelizeReadFile } from '../../../KSequelize/KData/JSON/UserData/CustomersJsonFile/ReadFile.js';

let GetFuncDal = ({ FromJson, FromSqlite }) => {
    if (FromJson) {
        return StartFuncKLowDb();
    };

    if (FromSqlite) {
        return StartFuncKSequelizeReadFile();
    }
};

let PostFuncDal = ({ inDataToInsert }) => {
    return StartFuncWriteFile({ inDataToInsert });
};

let PostUploadFuncDal = ({ inDataToInsert }) => {
    return StartFuncImport({ inDataToInsert });
};

let PatchFuncDal = ({ UuId, inDataToInsert }) => {
    return StartFuncUpdateFile({ UuId, inDataToInsert });
};

export { GetFuncDal, PostFuncDal, PostUploadFuncDal, PatchFuncDal };