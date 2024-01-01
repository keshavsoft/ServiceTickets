import { PostFunc as PostFuncToLowDb } from '../../KLowDb';

let GetFunc = ({ FromJson, FromSqlite }) => {

  if (FromJson) {
    return StartFuncKLowDb();
};

if (FromSqlite) {
    return StartFuncKSequelizeReadFile();
}

};

export { GetFunc };

const fs = require("fs-extra");
let CommonAbsolutePath = require("../../../DataPath");

let CommonMock = require("../../../../MockAllow.json");

let StartFunc = async ({ inUserPK }) => {
    let LocalReturnData = { KTF: false, KReason: "" };
    try {
        let GlobalDataPath = CommonAbsolutePath.ReturnAbsolutePathOfPresentApp({});
        let LocalFolderPath = `${GlobalDataPath}/${inUserPK}`
        let LocalFromPath = `${GlobalDataPath}/TemplateDatas/ForLaundry/3016`;

        if (fs.existsSync(LocalFolderPath)) {
            LocalReturnData.KReason = "Data is already present on the server";
        } else {
            fs.copySync(LocalFromPath, LocalFolderPath);

            LocalReturnData.KTF = true;
        };
    } catch (error) {
        console.log("error : ", error);
    };

    return await LocalReturnData;
};

module.exports = { StartFunc };