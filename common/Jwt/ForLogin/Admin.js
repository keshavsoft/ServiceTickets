import jwt from 'jsonwebtoken';

let CreateToken = ({ inPassword }) => {
    if ("KS_TOKEN_FORADMIN" in process.env === false) {
        console.log("KS_TOKEN_FORADMIN not found in evn");
        return false;
    };
    
    let LocalToken = process.env.KS_TOKEN_FORADMIN;
    var token = jwt.sign({ Password: inPassword }, LocalToken);
    return token;
};

let VerifyToken = (req, res, next) => {
    let LocalToken = process.env.KS_TOKEN_FORADMIN;
    let LocalTokenFromCookie = req.cookies.KToken;
    var decoded = jwt.verify(LocalTokenFromCookie, LocalToken);
    console.log("decoded : ", decoded);
    next();
    // return decoded;
};

let RedirectToLogin = (req, res, next) => {
    if ("KToken" in req.cookies) {
        VerifyToken(req, res, next);
    } else {
        res.sendStatus(403);
    };
};

export { CreateToken, RedirectToLogin };