import { PostFunc } from '../../Dal/login/GenerateToken.js';

let PostFuncRepo = async ({ UserName, PassWord }) => {
    return await PostFunc({ UserName, PassWord });
};

export { PostFuncRepo };