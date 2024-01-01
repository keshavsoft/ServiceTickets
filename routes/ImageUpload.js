import express from 'express';
import { StartFunc as StartFuncUsingMulter } from './UsingMulter.js';

var router = express.Router();

router.post('/', StartFuncUsingMulter.single("image"), (req, res) => {
    console.log("aaaaaaaaaaa : ", req.body);
    res.json("upload");
});

export { router };