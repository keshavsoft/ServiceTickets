import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

let StartFunc = async ({ inEvent }) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs({inEvent});
    
};

export { StartFunc }