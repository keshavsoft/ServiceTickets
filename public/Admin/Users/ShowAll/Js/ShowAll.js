// import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";
import { StartFunc as StartFunShowOnDom } from "./FormLoad/ShowOnDom/Entry.js";

const StartFunc = () => {

    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFunShowOnDom });

    if (jVarLocalFromAdmin) {
        StartFunShowOnDom().then(() => {
            // StartFuncAddlisteners();
        })

    };
};

StartFunc();