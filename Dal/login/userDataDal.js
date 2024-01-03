import { StartFunc as StartFuncKLowDb } from '../../KLowDb/KData/JSON/Login/UserData/ReadFile.js';
import { StartFunc as StartFuncKLowDbWriteFile } from '../../KLowDb/KData/JSON/Login/UserData/WriteFile.js';
import { StartFunc as StartFuncCheckUserId } from '../../KLowDb/KData/JSON/Login/UserData/CheckUserId.js';

let GetFunc = async () => {
    return await StartFuncKLowDb();
};

let GetUserIdFuncDal = async ({ inUserId }) => {
    return await StartFuncCheckUserId({ inUserId });
};

let PostFunc = ({ UserName, PassWord }) => {
    return StartFuncKLowDbWriteFile({ UserName, PassWord });
};

export { GetFunc, PostFunc, GetUserIdFuncDal };