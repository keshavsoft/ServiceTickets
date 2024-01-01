let StartFunc = () => {
    console.log("oooooooooooooooo");
    let jVarLocalinputimageId = document.getElementById("inputimageId");
    let jVarLocalinputimageValue = jVarLocalinputimageId.files[0];
    let jVarLocalCustomerImageIdId = document.getElementById("CustomerImageId");
    jVarLocalCustomerImageIdId.src = URL.createObjectURL(jVarLocalinputimageValue);


};


export { StartFunc };