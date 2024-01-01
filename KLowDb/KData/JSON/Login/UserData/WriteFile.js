import CommonMock from '../../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckFile } from './CheckFile.js';
import { JSONSyncPreset } from 'lowdb/node'

let StartFunc = ({ UserName, PassWord }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    const defaultData = { posts: [] }
    const db = JSONSyncPreset(LocalReturnData.UserDataFilePath, defaultData);
    let LocalUserData = db.data;
    let MaxNumber = LocalMaxFuncFunc({ UserData: LocalUserData });
    let LocalinDataToInsert = LocalUserData.data[MaxNumber] = {};
    LocalinDataToInsert.UserName = UserName;
    LocalinDataToInsert.PassWord = PassWord;
    db.write();
    LocalReturnData.MaxPk = MaxNumber
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

const LocalMaxFuncFunc = ({ UserData }) => {
    let Objectkeys = Object.keys(UserData.data);
    let Maxnumber = Math.max(...Objectkeys, 0) + 1;
    return Maxnumber;
}

if (CommonMock.AllowMock) {
    if (CommonMock.MockKey === "K29") {
        StartFunc().then(PromiseData => {
            console.log("PromiseData : ", PromiseData);
        })

    };
};

export { StartFunc };