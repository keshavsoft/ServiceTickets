import fs from 'fs-extra';
import { ForExistence as ForExistenceCheckFile } from './CheckDataPkFolder.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false, KReason: "" };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    try {
        let LocalFolderPath = `${LocalReturnData.DataPkFolderPath}`;
        let LocalFromPath = `${LocalReturnData.KDataFolderPath}/TemplateDatas/ForSqlite/316`;

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