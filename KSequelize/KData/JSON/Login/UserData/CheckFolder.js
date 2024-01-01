import fs from 'fs'
import CommonMock from '../../../../MockAllow.json'  assert { type: 'json' };
import path from 'path';

let ForExistence = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.JSONFolderPath =  path.join(path.resolve(), '../../../../../KData');

    try {
        if (fs.statSync(LocalReturnData.JSONFolderPath).isDirectory()) {
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
    if (CommonMock.MockKey === "K24") {
        let LocalFromFunc = ForExistence();
        console.log("LocalFromFunc : ", LocalFromFunc);
    };
};

export { ForExistence };