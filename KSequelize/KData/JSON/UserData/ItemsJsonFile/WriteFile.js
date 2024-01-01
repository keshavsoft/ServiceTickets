import { ForExistence as ForExistenceCheckFile } from '../../CheckJsonFolder.js';
import { JSONPreset } from 'lowdb/node';
import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import { JSONSyncPreset } from 'lowdb/node'

let StartFunc = async ({ inDataToInsert }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.JsonFolderPath}/316/Items.json`;

    const defaultData = { error: "From KLowDb" }
    const db = await JSONPreset(LocalReturnData.UserDataFilePath, defaultData)
    db.data.push(inDataToInsert);
    let k1 = await db.write();
    // LocalReturnData.JsonData = db.data;
    LocalReturnData.KTF = true;

    return await LocalReturnData;
};

let StartFuncNoSync = ({ inDataToInsert }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.JsonFolderPath}/316/Items.json`;

    const defaultData = { error: "From KLowDb" };

    const db = JSONSyncPreset(LocalReturnData.UserDataFilePath, defaultData);

    // const db = await JSONPreset(LocalReturnData.UserDataFilePath, defaultData)
    db.data.push(inDataToInsert);
    db.write();
    // LocalReturnData.JsonData = db.data;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc, StartFuncNoSync };