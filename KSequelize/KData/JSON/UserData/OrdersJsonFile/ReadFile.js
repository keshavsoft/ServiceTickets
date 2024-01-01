import CommonMock from '../../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckFile } from '../../CheckJsonFolder.js';
import { JSONPreset } from 'lowdb/node';
import { JSONSyncPreset } from 'lowdb/node'

let StartFunc = async () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.JsonFolderPath}/316/Orders.json`;

    const defaultData = { error: "From KLowDb" }
    const db = await JSONPreset(LocalReturnData.UserDataFilePath, defaultData)

    LocalReturnData.JsonData = db.data;
    LocalReturnData.KTF = true;

    return await LocalReturnData;
};

let StartFuncSync = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.JsonFolderPath}/316/Orders.json`;

    const defaultData = { error: "From KLowDb" }
    const db = JSONSyncPreset(LocalReturnData.UserDataFilePath, defaultData)

    LocalReturnData.JsonData = db.data;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

if (CommonMock.AllowMock) {
    if (CommonMock.MockKey === "K29") {
        StartFunc().then(PromiseData => {
            console.log("PromiseData : ", PromiseData);
        })

    };
};

export { StartFunc, StartFuncSync };