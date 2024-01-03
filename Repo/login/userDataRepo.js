import { GetFunc as GetFuncDal, PostFunc, GetUserIdFuncDal } from '../../Dal/login/userDataDal.js';

let GetFunc = async () => {
    return await GetFuncDal();
};

let GetUserIdFuncRepo = async ({inUserId}) => {
    return await GetUserIdFuncDal({inUserId});
};

let PostFuncRepo = ({ UserName, PassWord }) => {
    return PostFunc({ UserName, PassWord });
};

export { GetFunc, PostFuncRepo, GetUserIdFuncRepo };