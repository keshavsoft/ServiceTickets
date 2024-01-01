const StartFunc = () => {
    let jVarLocalObject = {};

    jVarLocalObject.password = document.getElementById("KPasswordInput").value;

    if (jVarLocalObject.inPassWord !== "") {
        return jVarLocalObject;
    };
};

export { StartFunc };