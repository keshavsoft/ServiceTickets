import { PostFuncRepo } from '../../Repo/login/GenerateToken.js';
import { CreateToken } from "../../common/Jwt/ForLogin/Users.js";
import PackageJson from '../../package.json'  assert { type: 'json' };


let PostFunc = async (req, res) => {
    let { UserName, PassWord } = req.body;
    let LocalCookieName = PackageJson.Keshavsoft.ForNodejs.Authantication.Forjwt.UserKey;

    let LocalFromRepo = await PostFuncRepo({ UserName, PassWord });
    let LocalUserId = LocalFromRepo.UserId;

    if (LocalFromRepo.KTF) {
        let LocalToken = CreateToken({ InUserId: LocalUserId });
        LocalFromRepo.KToken = LocalToken;
        res.cookie(LocalCookieName, LocalToken, { maxAge: 900000, httpOnly: false });
        res.json(LocalFromRepo);

        // res.send(LocalToken);
        return;
    };

    // res.status(404).send("Oh uh, something went wrong");
    res.json(LocalFromRepo);
};


export { PostFunc };