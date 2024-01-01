import { ForExistence as ForExistenceCheckFile } from '../CheckDataPkFolder.js';
import { JSONSyncPreset } from 'lowdb/node'

let StartFuncNoSync = ({ inDataToInsert }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.DataPkFolderPath}/Items.json`;

    const defaultData = { error: "From KLowDb" };

    const db = JSONSyncPreset(LocalReturnData.UserDataFilePath, defaultData);
    let LocalinDataToInsert = LocalFunc({ inDataToInsert });
    
    db.data.push(LocalinDataToInsert);
    db.write();
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

const LocalFunc = ({ inDataToInsert }) => {

    let LocalReturnData = { ...inDataToInsert, UuId: uuidv4(), DateTime: Timestamp() };
    return LocalReturnData
};

const Timestamp = () => {

    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();

    return formattedDate;
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export { StartFuncNoSync };