import { GetFunc as GetFuncDal } from '../../Dal/admin/SetUp.js';
import Config from '../../Config.json'  assert { type: 'json' };

let GetFunc = () => {
    return GetFuncDal({
        FromJson: Config.FromJson,
        FromSqlite: Config.FromSqlite
    });
};

export { GetFunc };