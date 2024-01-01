
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

import { JSONPreset } from 'lowdb/node'
import DataPath from './DataPath.json'  assert { type: 'json' };

// let JSONPreset = require("lowdb");


let StartFunc = async () => {

    // Read or create db.json
    const defaultData = { posts: [] }
    const db = await JSONPreset(DataPath.DataPath, defaultData)
    db.write();

    // Create and query items using plain JavaScript
    // console.log(Object.keys(db.data.Barcodes));



};

// StartFunc().then();

export { StartFunc };