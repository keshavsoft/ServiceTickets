import fs from 'fs'
import CommonMock from '../MockAllow.json'  assert { type: 'json' };
import path from 'path';

let ForExistence = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    //LocalReturnData.KDataFolderPath =  path.join(path.resolve(), '../../../../../KData');
    LocalReturnData.KDataFolderPath =  path.join(path.resolve(), 'KData');

    try {
        if (fs.statSync(LocalReturnData.KDataFolderPath).isDirectory()) {
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