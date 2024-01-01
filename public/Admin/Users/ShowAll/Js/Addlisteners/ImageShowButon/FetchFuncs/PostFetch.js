import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ProjectKeys from "../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async ({ inEvent }) => {

    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inEvent });
    let jVarLocalFetchUrl = `/${ProjectKeys.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowDatas/WithImage`
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    if (response.status === 200) {
       
        const imageBlob = await response.blob();

        const imageObjectURL = URL.createObjectURL(imageBlob);

        const image = document.getElementById('ShowImageId')
        image.src = imageObjectURL;
        let jVarLocalShowImageModalLabel = document.getElementById("ShowImageModalLabel");
        jVarLocalShowImageModalLabel.innerHTML = JSON.parse(jVarLocalFetchHeaders.body).inRowPk;
        let jVarLocalShowImageModalDeleteButtonId = document.getElementById("ShowImageModalDeleteButtonId");
        jVarLocalShowImageModalDeleteButtonId.dataset.rowpk = JSON.parse(jVarLocalFetchHeaders.body).inRowPk;

        const myModalAlternative = new bootstrap.Modal('#ShowImageModal', {
            keyboard: false
        });
        myModalAlternative.show();
    };
    if (response.status === 403) {
        Swal.fire({
            title: 'Images not upload.!',
            width: 600,
            padding: '3em',
            color: ' #000080',
            background: '#fff url()',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
        })

    };
    // let data = await response.json();

    return await response;
    // return await data;
};

export { StartFunc };