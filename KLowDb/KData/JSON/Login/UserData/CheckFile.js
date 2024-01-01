import fs from 'fs'
import CommonMock from '../../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckLoginFolder } from '../CheckLoginFolder.js';

let ForExistence = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckLoginFolder();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.LoginFolderPath}/UserData.json`;

    try {
        if (fs.existsSync(LocalReturnData.UserDataFilePath)) {
            LocalReturnData.KTF = true;
        } else {
            LocalReturnData.KReason = "UserDataFilePath: not found!";
        }
    } catch (error) {
        LocalReturnData.KReason = "UserDataFilePath: not found!";
    };

    return LocalReturnData;
};

if (CommonMock.AllowMock) {
    if (CommonMock.MockKey === "K29") {
        let LocalFromFunc = ForExistence();
        console.log("LocalFromFunc : ", LocalFromFunc);
    };
};

export { ForExistence };