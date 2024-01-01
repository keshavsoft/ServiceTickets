import { StartFunc as StartFuncKLowDb } from '../../KLowDb/KData/JSON/Login/UserData/ReadFile.js';
import { StartFunc as StartFuncKLowDbWriteFile } from '../../KLowDb/KData/JSON/Login/UserData/WriteFile.js';

let GetFunc = async () => {
    return await StartFuncKLowDb();
};

let PostFunc = ({ UserName, PassWord }) => {
    return StartFuncKLowDbWriteFile({ UserName, PassWord });
};

export { GetFunc, PostFunc };