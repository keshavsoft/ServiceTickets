import jwt from 'jsonwebtoken';
import PackageJson from '../../../package.json'  assert { type: 'json' };

let CommonEnvVariable = "KS_TOKEN_FORUSERS";
let CommonTokenName = PackageJson.Keshavsoft.ForNodejs.Authantication.Forjwt.UserKey;

let CreateToken = ({ InUserId }) => {
    if (CommonEnvVariable in process.env === false) {
        console.log(`${CommonEnvVariable} not found in .env File`);
        return false;
    };

    let LocalToken = process.env[CommonEnvVariable];
    var token = jwt.sign({ InUserId }, LocalToken);
    return token;
};

let VerifyToken = (req, res, next) => {

    if (CommonEnvVariable in process.env === false) {
        console.log(`${CommonEnvVariable} not found in .env File`);
        return false;
    };

    let LocalToken = process.env[CommonEnvVariable];
    let LocalTokenFromCookie = req.cookies[CommonTokenName];

    try {
        var decoded = jwt.verify(LocalTokenFromCookie, LocalToken);
        next();

    } catch (error) {
        res.sendStatus(403);
    }
    // return decoded;
};

let RedirectToLogin = (req, res, next) => {
    if (CommonTokenName in req.cookies) {
        VerifyToken(req, res, next);
    } else {
        res.sendStatus(403);
    };
};

export { CreateToken, RedirectToLogin };