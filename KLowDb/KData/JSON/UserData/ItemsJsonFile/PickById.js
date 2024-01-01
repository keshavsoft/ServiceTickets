import CommonMock from '../../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckFile } from '../CheckDataPkFolder.js';
import { JSONSyncPreset } from 'lowdb/node'


let StartFuncNoSync = ({ inId }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.DataPkFolderPath}/Items.json`;

    const defaultData = { error: "From KLowDb" }
    const db = JSONSyncPreset(LocalReturnData.UserDataFilePath, defaultData)
    let LocalRequreRow = db.data.find(ele => ele.UuId == inId)
    LocalReturnData.JsonData = LocalRequreRow;
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

export { StartFuncNoSync };