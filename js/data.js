jQuery(document).ready(function () {
    /*var json = [{ "User_Name": "John Doe", "score": "10", "team": "1" }, { "User_Name": "Jane Smith", "score": "15", "team": "2" }, { "User_Name": "Chuck Berry", "score": "12", "team": "2" }];
    console.log(json);
    ko.applyBindings({
        teams: json
    });*/

    var url = "https://spreadsheets.google.com/feeds/list/13Hpv0NLNMfiqWfA1kXzBjioYD5oVXSN5frzBAwnsuBw/od6/public/values?alt=json";
    xmlhttp = new XMLHttpRequest();
    var data;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            data = JSON.parse(xmlhttp.responseText).feed.entry;
            console.log(data);
            console.log(data[0].id.$t);
            ko.applyBindings({
                events: data
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
});