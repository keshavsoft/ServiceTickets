import { StartFunc as StartFuncCreateCustomer } from "./CreateCustomer/StartFunc.js";
import { StartFunc as StartFuncImageShowButon } from "./ImageShowButon/StartFunc.js";

let StartFunc = () => {
    StartFuncCreateCustomer();
    StartFuncImageShowButon();
};

export { StartFunc };