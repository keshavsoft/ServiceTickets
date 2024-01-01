import { StartFunc as CommonMessageAsJson } from './MessageAsJson/EntryFile.js';
import { StartFunc as CommonMessageAsString } from './MessageAsString/EntryFile.js';

let StartFunc = ({ inData }) => {
    let LocalData = inData;

    try {
        LocalDataAsJson = JSON.parse(LocalData);
        CommonMessageAsJson({ inDataAsJson: LocalDataAsJson });

        return;
    } catch (error) {

    };

    CommonMessageAsString({ inDataAsString: LocalData.toString() });
};

export { StartFunc };