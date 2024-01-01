import { StartFunc as StartFuncKLowDb } from '../../../../KLowDb/write.js';

let StartFunc = ({ inDataAsString }) => {
    let LocalDataAsSting = inDataAsString;
    StartFuncKLowDb({ inData: LocalDataAsSting });
    console.log("string : ", LocalDataAsSting, new Date());
};

export { StartFunc }