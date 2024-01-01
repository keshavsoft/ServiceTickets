import fs from 'fs'
import CommonMock from '../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckKData } from '../CheckKData.js';

let ForExistence = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckKData();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.JsonFolderPath = `${LocalReturnData.KDataFolderPath}/JSON`;

    try {
        if (fs.statSync(LocalReturnData.JsonFolderPath).isDirectory()) {
            LocalReturnData.KTF = true;
        } else {
            LocalReturnData.KReason = "JSONFolderPath: not found!";
        }
    } catch (error) {
        LocalReturnData.KReason = "JSONFolderPath: not found!";
    };

    return LocalReturnData;
};

if (CommonMock.AllowMock) {
    if (CommonMock.MockKey === "K25") {
        let LocalFromFunc = ForExistence();
        console.log("LocalFromFunc : ", LocalFromFunc);
    };
};

export { ForExistence };