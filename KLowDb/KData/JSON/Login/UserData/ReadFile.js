import CommonMock from '../../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckFile } from './CheckFile.js';
import { JSONPreset } from 'lowdb/node';

let StartFunc = async () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.LoginFolderPath}/UserData.json`;

    const defaultData = { posts: [] }
    const db = await JSONPreset(LocalReturnData.UserDataFilePath, defaultData)

    LocalReturnData.JsonData = db.data.data;
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

export { StartFunc };