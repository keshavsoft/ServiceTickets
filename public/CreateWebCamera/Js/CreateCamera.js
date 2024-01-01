import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/EntryFile.js";

const StartFunc = () => {
    // let jVarLocalFromAdmin = true;
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
        StartFuncAddlisteners();
    };
};

StartFunc();