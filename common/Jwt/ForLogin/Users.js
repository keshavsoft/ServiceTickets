import jwt from 'jsonwebtoken';
let CommonEnvVariable = "KS_TOKEN_FORUSERS";

let CreateToken = ({ inUserName }) => {
    if (CommonEnvVariable in process.env === false) {
        console.log(`${CommonEnvVariable} not found in .env File`);
        return false;
    };

    let LocalToken = process.env[CommonEnvVariable];
    var token = jwt.sign({ UserName: inUserName }, LocalToken);
    return token;
};

let VerifyToken = (req, res, next) => {

    if (CommonEnvVariable in process.env === false) {
        console.log(`${CommonEnvVariable} not found in .env File`);
        return false;
    };

    let LocalToken = process.env[CommonEnvVariable];
    let LocalTokenFromCookie = req.cookies.KToken;
    var decoded = jwt.verify(LocalTokenFromCookie, LocalToken);
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