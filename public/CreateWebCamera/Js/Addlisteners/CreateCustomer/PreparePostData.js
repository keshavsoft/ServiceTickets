let StartFunc = async () => {

    let jVarLocalCustomerNamevalue = jFLocalFromDomCustomerNameId();
    let jVarLocalCustomerCityIdvalue = jFLocalFromDomCityId();
    let jVarLocalCustomerMobileIdvalue = jFLocalFromDomMobileId();

    let formData = new FormData();

    formData.append("inFolderName", "Masters");
    formData.append("inFileNameOnly", "CRM");
    formData.append("inItemName", "CustomerNames");
    formData.append("CustomerName", jVarLocalCustomerNamevalue);
    formData.append("Mobile", jVarLocalCustomerMobileIdvalue);
    formData.append("City", jVarLocalCustomerCityIdvalue);
    formData.append('image', await jFLocalPrepareBlob());
    
    return await formData;
};

let jFLocalPrepareBlob = async () => {
    let jVarLocalCustomerImageId = document.getElementById('CustomerImageId');

    let jVarLocalFromFetch = await fetch(jVarLocalCustomerImageId.src);
    let blob = await jVarLocalFromFetch.blob();
    return await blob;
};


let jFLocalFromDomCustomerNameId = () => {
    let jVarLocalHtmlCustomerNameId = 'CustomerNameId';
    let jVarHtmlCustomerNameId = document.getElementById(jVarLocalHtmlCustomerNameId);
    let jVarHtmlCustomerNameIdValue = jVarHtmlCustomerNameId.value;
    return jVarHtmlCustomerNameIdValue;
};

let jFLocalFromDomCityId = () => {
    let jVarLocalHtmlCityId = 'CityId';
    let jVarHtmlCityId = document.getElementById(jVarLocalHtmlCityId);
    let jVarHtmlCityIdValue = jVarHtmlCityId.value;
    return jVarHtmlCityIdValue;
};

let jFLocalFromDomMobileId = () => {
    let jVarLocalHtmlMobileId = 'MobileId';
    let jVarHtmlMobileId = document.getElementById(jVarLocalHtmlMobileId);
    let jVarHtmlMobileIdValue = jVarHtmlMobileId.value;
    return jVarHtmlMobileIdValue;
};



export { StartFunc };