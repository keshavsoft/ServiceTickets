import { StartFunc as PostFuncKSequelize } from '../../KSequelize/KData/JSON/UserData/SetUp.js';
import { StartFunc as StartFuncKLowDb } from '../../KLowDb/KData/JSON/UserData/SetUp.js';

let GetFunc = ({ FromJson, FromSqlite }) => {
  if (FromJson) {
    return StartFuncKLowDb();
  };

  if (FromSqlite) {
    return PostFuncKSequelize();
  };
};

export { GetFunc };