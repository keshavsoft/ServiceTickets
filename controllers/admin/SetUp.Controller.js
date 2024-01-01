import { GetFunc as GetFuncRepo } from "../../Repo/admin/SetUp.js";

let GetFunc = (req, res) => {

    let ResponseData = GetFuncRepo();

    res.status(200).json(ResponseData);
};

export { GetFunc };