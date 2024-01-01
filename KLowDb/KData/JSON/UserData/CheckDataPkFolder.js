import fs from 'fs'
import { ForExistence as ForExistenceCheckKData } from '../CheckJsonFolder.js';

let ForExistence = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckKData();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.DataPkFolderPath = `${LocalReturnData.JsonFolderPath}/317`;

    try {
        if (fs.statSync(LocalReturnData.DataPkFolderPath).isDirectory()) {
            LocalReturnData.KTF = true;
        } else {
            LocalReturnData.KReason = "DataPkFolderPath: not found!";
        }
    } catch (error) {
        LocalReturnData.KReason = "DataPkFolderPath: not found!";
    };

    return LocalReturnData;
};


export { ForExistence };