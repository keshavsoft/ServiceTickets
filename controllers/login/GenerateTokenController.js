import { PostFuncRepo } from '../../Repo/login/GenerateToken.js';
import { CreateToken } from "../../common/Jwt/ForLogin/Users.js";

let PostFunc = async (req, res) => {
    let { UserName, PassWord } = req.body;

    let LocalFromRepo = await PostFuncRepo({ UserName, PassWord });
    let LocalUserId = LocalFromRepo.UserId;

    if (LocalFromRepo.KTF) {
        let LocalToken = CreateToken({ InUserId: LocalUserId });

        res.cookie('KToken', LocalToken, { maxAge: 900000, httpOnly: false });

        res.send(LocalToken);
        return;
    };

    // res.status(404).send("Oh uh, something went wrong");
    res.json(LocalFromRepo);
};


export { PostFunc };