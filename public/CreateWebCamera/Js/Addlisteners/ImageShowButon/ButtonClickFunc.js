let StartFunc = () => {

    Webcam.snap(function (data_url) {
        let jVarLocalCustomerImageIdId = document.getElementById("CustomerImageId");
        jVarLocalCustomerImageIdId.src = data_url;
    });
};


export { StartFunc };