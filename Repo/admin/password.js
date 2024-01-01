import { PostFunc as PostFuncDal } from '../../Dal/admin/password.js';

let PostFunc = ({ inPassword }) => {
    return PostFuncDal({ inPassword });
};

export { PostFunc };