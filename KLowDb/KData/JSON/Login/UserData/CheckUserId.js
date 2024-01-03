import CommonMock from '../../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckFile } from './CheckFile.js';
import { JSONPreset } from 'lowdb/node';

let StartFunc = async ({ inUserId }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.LoginFolderPath}/UserData.json`;

    const defaultData = { posts: [] }
    const db = await JSONPreset(LocalReturnData.UserDataFilePath, defaultData)

    let LocalData = db.data.data;
    if (inUserId in LocalData === false) {
        LocalReturnData.Kreason = `UserId: ${inUserId} not found !`;
        return LocalReturnData;
    };

    LocalReturnData.UserId = inUserId;
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