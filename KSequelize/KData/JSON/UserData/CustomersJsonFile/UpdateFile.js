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

    LocalReturnData.UserDataFilePath = `${LocalReturnData.JsonFolderPath}/316/Customers.json`;

    const defaultData = { error: "From KLowDb" }
    const db = await JSONPreset(LocalReturnData.UserDataFilePath, defaultData);
    const LocalupdatedArray = await LocalSyncUpdateObject(db.data, inDataToInsert.uuidv4, inDataToInsert);

    db.data = LocalupdatedArray;
    let k1 = await db.write();
    LocalReturnData.KTF = true;

    return await LocalReturnData;
};

let StartFuncNoSync = ({ inDataToInsert }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.JsonFolderPath}/316/Customers.json`;

    const defaultData = { error: "From KLowDb" };

    const db = JSONSyncPreset(LocalReturnData.UserDataFilePath, defaultData);
    let LocalupdatedArray = LocalNoSyncUpdateObject(db.data, inDataToInsert.uuidv4, inDataToInsert);
    db.data = LocalupdatedArray;
    db.write();
    LocalReturnData.JsonData = db.data;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

let LocalNoSyncUpdateObject = (array, idToUpdate, updatedObject) => {
    const updatedArray = array.map(obj => {
        if (obj.uuidv4 == idToUpdate) {
            // Update the matching object
            return { ...obj, ...updatedObject };
        }
        // Keep other objects unchanged
        return obj;
    });

    return updatedArray;
}

let LocalSyncUpdateObject = async (array, idToUpdate, updatedObject) => {
    const updatedArray = array.map(obj => {
        if (obj.uuidv4 == idToUpdate) {
            // Update the matching object
            return { ...obj, ...updatedObject };
        }
        // Keep other objects unchanged
        return obj;
    });

    return updatedArray;
}




export { StartFunc, StartFuncNoSync };