import CommonMock from '../../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckFile } from '../CheckDataPkFolder.js';
import { JSONSyncPreset } from 'lowdb/node'
import FileConfig from './FileConfig.json'  assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();
    let LocalFileName = FileConfig.FileName;

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.DataPkFolderPath}/${LocalFileName}`;

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

export { StartFunc };