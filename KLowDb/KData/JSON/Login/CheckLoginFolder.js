import fs from 'fs'
import CommonMock from '../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckJsonFolder } from '../CheckJsonFolder.js';

let ForExistence = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckJsonFolder();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.LoginFolderPath = `${LocalReturnData.JsonFolderPath}/Login`;

    try {
        if (fs.statSync(LocalReturnData.LoginFolderPath).isDirectory()) {
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