// import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
// import ProjectKeys from "../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async () => {
    // let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/login/userData`
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };