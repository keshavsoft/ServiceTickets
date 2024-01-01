import fs from 'fs-extra';
import { ForExistence as ForExistenceCheckFile } from './CheckDataPkFolder.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false, KReason: "" };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    if (LocalFromCheck.KTF === false) {
        fs.mkdirSync(LocalReturnData.DataPkFolderPath);
        // LocalReturnData.KReason = "DataPkFolderPath is already present";
        // return LocalReturnData;
    };

    try {
        let LocalFolderPath = `${LocalReturnData.DataPkFolderPath}`;
        let LocalFromPath = `${LocalReturnData.KDataFolderPath}/TemplateDatas/ForLowDb/316`;

        if (fs.existsSync(LocalFolderPath)) {
            fs.copySync(LocalFromPath, LocalFolderPath);

            LocalReturnData.KTF = true;
        };
    } catch (error) {
        console.log("error : ", error);
    };

    return LocalReturnData;
};

export { StartFunc };