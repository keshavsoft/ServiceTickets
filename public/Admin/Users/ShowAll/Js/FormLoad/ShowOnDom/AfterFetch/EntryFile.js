let StartFunc = ({ inDataToShow }) => {
    // jFLocalHideSpinner();
    let jVarLocalDataToShow = Object.values(inDataToShow);

    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow
    });

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }