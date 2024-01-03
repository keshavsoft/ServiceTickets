import { StartFunc as StartFuncKLowDbWriteFile } from '../../KLowDb/KData/JSON/Login/UserData/GenerateToken.js';

let PostFunc = async ({ UserName, PassWord }) => {
    return await StartFuncKLowDbWriteFile({ UserName, PassWord });
};

export { PostFunc };