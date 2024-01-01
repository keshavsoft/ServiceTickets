let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF) {
        jFLocalPostFetchNotArray({ inRowPk: inFromFetch.NewRowPK });
    } else {
        Swal.fire(inFromFetch.KReason);
    }
};

let jFLocalPostFetchNotArray = ({ inRowPk }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    myUrlWithParams.searchParams.append("FromSave", true);
    myUrlWithParams.searchParams.append("NewRowPK", inRowPk);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc };