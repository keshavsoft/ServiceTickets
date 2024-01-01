import { PostFunc as PostFuncRepo } from "../../Repo/admin/password.js";
import { CreateToken } from "../../common/Jwt/ForLogin/Admin.js";

let PostFunc = (req, res) => {
    let LocalPassword = req.body.password;
    
    if (PostFuncRepo({ inPassword: LocalPassword })) {
        let LocalToken = CreateToken({ inPassword: LocalPassword });
        
        res.cookie('KToken', LocalToken, { maxAge: 900000, httpOnly: false });

        res.send(LocalToken);
        return;
    };

    res.status(404).send("Oh uh, something went wrong");
};

export { PostFunc };