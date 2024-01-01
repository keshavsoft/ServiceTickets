let jVarLocalHtmlId = 'CamaraOpenId';
let jVarLocalCamaraOpenId = document.getElementById(jVarLocalHtmlId);
jVarLocalCamaraOpenId.addEventListener("click", () => {

    PopFunc()
    startup()
});

function startup() {
    Webcam.set({
        width: 200,
        height: 200,
        image_format: 'jpeg',
        jpeg_quality: 90
    })
    Webcam.attach("#CamaraId")
};

const PopFunc = () => {
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
myModal.show();

};



