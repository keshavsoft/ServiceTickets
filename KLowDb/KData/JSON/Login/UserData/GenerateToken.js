import CommonMock from '../../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckFile } from './CheckFile.js';
import { JSONPreset } from 'lowdb/node';

let StartFunc = async ({ UserName, PassWord }) => {
    
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.LoginFolderPath}/UserData.json`;

    const defaultData = { posts: [] }
    const db = await JSONPreset(LocalReturnData.UserDataFilePath, defaultData)

    let LocalData = db.data.data;
    Object.entries(LocalData).forEach(([key, value]) => {

        if (UserName === value.UserName && PassWord === value.PassWord) {
            LocalReturnData.UserId = key;
            LocalReturnData.UserName = UserName;
            LocalReturnData.PassWord = PassWord;
            LocalReturnData.KTF = true;

            return LocalReturnData
        };

    });
    return await LocalReturnData;
};

if (CommonMock.AllowMock) {
    if (CommonMock.MockKey === "552") {
        StartFunc({ UserName: "vasu", PassWord: "222" }).then(PromiseData => {
            // console.log("PromiseData : ", PromiseData);
        })

    };
};

export { StartFunc };