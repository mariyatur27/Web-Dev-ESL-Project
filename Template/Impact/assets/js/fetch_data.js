//Local database

//TO DO: Determine what information will be displayed for each club
var clubs = [
    {
        "name": "WCI Web Dev-1",
        "meeting_time": "2:30 pm Tuesdays",
        "meeting_place": "Room 400",
        "description" : "Web developmnet club",
        "club_logo": "coming soon",
        "google_classroom_code": ""
    }
];

//TO DO: Determine what information will be displayed for each AP resource
var ap_resources = [
    {
        "name": "ap calc",
        "course_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas alias numquam accusantium placeat aut sit est dolores recusandae ea, perspiciatis repellat, rerum, sapiente cum molestiae reprehenderit? Placeat, perspiciatis eligendi.",
        "prerequisits": ['gr 11 math', 'gr 10 math']
    },
    {
        "name": "ap chem",
        "course_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas alias numquam accusantium placeat aut sit est dolores recusandae ea, perspiciatis repellat, rerum, sapiente cum molestiae reprehenderit? Placeat, perspiciatis eligendi.",
        "prerequisits": ['gr 11 chem', 'gr 10 sciences']
    }
];

var ap_instructions = [
    {
        "type": "1",
        "steps": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
        ]
    },
    {
        "type": "2",
        "steps": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
        ]
    },
    {
        "type": "3",
        "steps": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
        ]
    },
    {
        "type": "4",
        "steps": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
        ]
    },
    {
        "type": "5",
        "steps": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed aliquet pellentesque sapien sit amet lobortis.",
        ]
    }
]

//TO DO: Determine what information will be displayed for each English resource
var english_examination_resources = [
    {
        "name": "lol"
    },
    {
        "name": "yoo"
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
