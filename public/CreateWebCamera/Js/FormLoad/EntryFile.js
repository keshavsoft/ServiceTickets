// import { StartFunc as StartFuncCheckLogin } from "./Check/Entry.js";
// import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/EntryFile.js";

let StartFunc = () => {
    let jVarLocalFromSave = getUrlQueryParams({ inGetKey: "FromSave" });

    if (jVarLocalFromSave) {
        let jVarLocalNewRowPK = getUrlQueryParams({ inGetKey: "NewRowPK" });

        let jVarLocalAlertSuccessId = document.getElementById('AlertSuccessId');
        jVarLocalAlertSuccessId.style.display = "";

        let jVarLocalRowPkInsertSuccessStrongId = document.getElementById('RowPkInsertSuccessStrongId');
        jVarLocalRowPkInsertSuccessStrongId.innerHTML = jVarLocalNewRowPK;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
