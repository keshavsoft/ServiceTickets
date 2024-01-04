import { PostFunc as PostFuncRepo } from "../../Repo/admin/password.js";
import { CreateToken } from "../../common/Jwt/ForLogin/Admin.js";
import PackageJson from '../../package.json'  assert { type: 'json' };

let PostFunc = (req, res) => {
    let LocalPassword = req.body.password;
    let LocalCookieName = PackageJson.Keshavsoft.ForNodejs.Authantication.Forjwt.AdminKey;

    if (PostFuncRepo({ inPassword: LocalPassword })) {
        let LocalToken = CreateToken({ inPassword: LocalPassword });

        res.cookie(LocalCookieName, LocalToken, { maxAge: 900000, httpOnly: false });

        res.send(LocalToken);
        return;
    };

    res.status(404).send("Oh uh, something went wrong");
};

export { PostFunc };