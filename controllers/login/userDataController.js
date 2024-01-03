import { GetFunc as GetFuncRepo, PostFuncRepo, GetUserIdFuncRepo } from '../../Repo/login/userDataRepo.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();
    res.json(LocalFromRepo);
};

let GetUserIdFunc = async (req, res) => {
    let LocalUserid = req.params.UserId;
    let LocalFromRepo = await GetUserIdFuncRepo({ inUserId: LocalUserid });
    res.json(LocalFromRepo);
};

let PostFunc = (req, res) => {
    let { UserName, PassWord } = req.body;

    let LocalFromRepo = PostFuncRepo({ UserName, PassWord });
    res.json(LocalFromRepo);
};


export { GetFunc, PostFunc, GetUserIdFunc };