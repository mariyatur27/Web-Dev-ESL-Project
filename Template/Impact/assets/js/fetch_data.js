//Local database

//TO DO: Determine what information will be displayed for each club
var clubs = [
    {
        "name": "WCI Web Dev"
    }
];

//TO DO: Determine what information will be displayed for each AP resource
var ap_resources = [
    {
        "name": "WCI Web Dev-2"
    }
];

//TO DO: Determine what information will be displayed for each English resource
var english_examination_resources = [
    {
        "name": "WCI Web Dev-3"
    }
];

//Conneting to the JSON databases to get data from them
var dataFetched = false;

async function fetchData() {
    console.log(window.location.protocol)
    if (window.location.protocol == "file:") {
        dataFetched = true;
    } else {
        console.log("Starting to load the data");
        clubs = await (await fetch("data/clubs.json")).json();
        ap_resources = await (await fetch("data/ap_resources.json")).json();
        english_examination_resources = await (await fetch("data/english_examination_resources.json")).json();
    }
    dataFetched = true;
}
