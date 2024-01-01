import { GetFunc as GetFuncDal, PostFunc } from '../../Dal/login/userDataDal.js';

let GetFunc = async () => {
    return await GetFuncDal();
};

let PostFuncRepo = ({ UserName, PassWord }) => {
    return PostFunc({ UserName, PassWord });
};

export { GetFunc, PostFuncRepo };