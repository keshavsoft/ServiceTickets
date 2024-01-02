import { ForExistence as ForExistenceCheckFile } from '../CheckDataPkFolder.js';
import { JSONSyncPreset } from 'lowdb/node'
import FileConfig from './FileConfig.json'  assert { type: 'json' };

let StartFunc = ({ inDataToInsert }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();
    let LocalFileName = FileConfig.FileName;

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.DataPkFolderPath}/${LocalFileName}`;

    const defaultData = { error: "From KLowDb" };

    const db = JSONSyncPreset(LocalReturnData.UserDataFilePath, defaultData);
    let LocalInsertdata = getUnmatchedData(inDataToInsert, db.data);
    let LocalinDataToInsert = LocalFunc({ inDataToInsert: LocalInsertdata });

    db.data.push(...LocalinDataToInsert);
    db.write();
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

const getUnmatchedData = (arr1, arr2) => {
    return arr1.filter(item1 => !arr2.some(item2 => item1.Jobno === item2.Jobno));
};

const LocalFunc = ({ inDataToInsert }) => {

    let LocalReturnData = inDataToInsert.map(element => {
        let LocalReturnData = { ...element, UuId: uuidv4(), DateTime: Timestamp() };
        return LocalReturnData
    });

    return LocalReturnData;
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

export { StartFunc };