jQuery(document).ready(function () {
    var url = "https://spreadsheets.google.com/feeds/list/13Hpv0NLNMfiqWfA1kXzBjioYD5oVXSN5frzBAwnsuBw/od6/public/values?alt=json";
    xmlhttp = new XMLHttpRequest();
    var data;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            data = JSON.parse(xmlhttp.responseText).feed.entry;
            ko.applyBindings({
                events: data
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
});