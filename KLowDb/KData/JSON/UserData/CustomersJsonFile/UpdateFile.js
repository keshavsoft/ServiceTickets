import { ForExistence as ForExistenceCheckFile } from '../CheckDataPkFolder.js';
import { JSONSyncPreset } from 'lowdb/node'

let StartFuncNoSync = ({ UuId, inDataToInsert }) => {
    let localUUid = UuId;
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.DataPkFolderPath}/Customers.json`;

    const defaultData = { error: "From KLowDb" };

    const db = JSONSyncPreset(LocalReturnData.UserDataFilePath, defaultData);
    let LcoalOrginalData = db.data;
    let LocalupdatedArray = LocalNoSyncUpdateObject({
        OrginalData: LcoalOrginalData,
        UuId: localUUid,
        updatedObject: LocalinDataToInsert
    });
    db.data = LocalupdatedArray;
    db.write();
    LocalReturnData.JsonData = db.data;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

let LocalNoSyncUpdateObject = ({ OrginalData, UuId, updatedObject }) => {
    const updatedArray = OrginalData.map(obj => {
        if (obj.UuId == UuId) {
            // Update the matching object
            return { ...obj, ...updatedObject };
        }
        // Keep other objects unchanged
        return obj;
    });

    return updatedArray;
};


export { StartFuncNoSync };