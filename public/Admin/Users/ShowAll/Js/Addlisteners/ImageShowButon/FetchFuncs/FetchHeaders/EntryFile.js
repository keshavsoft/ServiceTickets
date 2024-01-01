import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from '../../../../../ConfigKeys/FetchKeys/ForPostKeysAsIs.json' assert {type: 'json'};

let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
    let jVarLocalBodyKeys = {};

    BodyKeysJson.inRowPk = jVarLocalRowPk
    jVarLocalBodyKeys = BodyKeysJson;

    jVarLocalBodyKeys = BodyKeysJson;

    let jVarLocalFileValue = BodyKeysJson.inFileNameOnly;

    let jVarLocalBodyKeysJson = jVarLocalBodyKeys;

    jVarLocalBodyKeysJson.inFileNameOnly = jVarLocalFileValue.search(".") === -1 ? jVarLocalFileValue : jVarLocalFileValue.split(".")[0]

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

export { StartFunc }