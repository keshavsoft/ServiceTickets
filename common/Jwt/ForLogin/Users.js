import jwt from 'jsonwebtoken';
let CommonEnvVariable = "KS_TOKEN_FORUSERS";

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
    let LocalTokenFromCookie = req.cookies.KToken;

    try {
        var decoded = jwt.verify(LocalTokenFromCookie, LocalToken);
        next();

    } catch (error) {
        res.sendStatus(403);
    }
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