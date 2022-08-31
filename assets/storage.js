const CACHE_KEY =  "calculation_history";
function checkForStorage() {
    return typeof(Storage) !== "undefined"
}
function puthistory(data) {
    if (checkForStorage()) {
        let historydata = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historydata = [];
        } else {
            historydata = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historydata.unshift(data);

        if(historydata.length > 5) {
            historydata.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historydata));
    }
}
function showhistory() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}
function renderHistory() {
    const historydata = showhistory();
    let historyList = document.querySelector("#history");

    historyList.innerHTML = "";

    for (let history of historydata) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firsNumber + "</td>";
        row.innerHTML = "<td>" + history.operator + "</td>";
        row.innerHTML = "<td>" + history.secondNumber + "</td>";
        row.innerHTML = "<td>" + history.result + "</td>";

        historyList.appendChild(row);

    }
}

renderHistory();