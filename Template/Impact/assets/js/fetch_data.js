//Local database

//TO DO: Determine what information will be displayed for each club
var clubs = [
    {
        "name": "WCI Web Dev-1",
        "description" : "Web development club",
        "club_logo": "coming soon",
        "meeting_time": "2:30 pm Tuesdays",
        "meeting_place": "Room 400",
        "google_classroom_code": "",
        "student_leader_contacts": ["john_doe@thisisnotarealaddress.com", "jane_doe@alsonotarealaddress.com"]
    },
    {
        "name": "My Totally Real Club",
        "description" : "Wow this club is so awesome you should join it!!!",
        "club_logo": "coming soon",
        "meeting_time": "26:72 PM last week",
        "meeting_place": "Room √-1",
        "google_classroom_code": "aaaaaaa",
        "student_leader_contacts": ["mkddwuhdwwiudf3f@no.com"]
    },
    {
        "name": "Fight Club",
        "description" : "The first rule of Fight Club is: you do not talk about Fight Club.",
        "club_logo": "",
        "meeting_time": "",
        "meeting_place": "",
        "google_classroom_code": "",
        "student_leader_contacts": []
    },
    {
        "name": "Rickrolling Club",
        "description" : "Never gonna give you up, never gonna let you down...",
        "club_logo": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "meeting_time": "3:32",
        "meeting_place": "",
        "google_classroom_code": "dqw4w9w",
        "student_leader_contacts": ["rick_astley@gmail.com"]
    },
    {
        "name": "Random Keysmashing Club",
        "description" : "diuhyfejfew3rh9ufh98fewj9cinucewiuewj8efw8jefw",
        "club_logo": "dwnud3h897g65t6y7u8ioigvbnjklo",
        "meeting_time": "d75rtyc",
        "meeting_place": "i9p][ppewfdefw",
        "google_classroom_code": "efwo;k;plof;lok;klo",
        "student_leader_contacts": ["ahbsnoinojfen@gmail.com"]
    },
    {
        "name": "CAPS LOCK CLUB",
        "description" : "CAPS LOCK IS AWESOME!!! JOIN US TO DISCUSS WHY YOU SHOULD HAVE CAPS LOCK ON ALL THE TIME!!!",
        "club_logo": "",
        "meeting_time": "AA:AA EVERY TUESDAY",
        "meeting_place": "ROOM AAA",
        "google_classroom_code": "C4PSL0K",
        "student_leader_contacts": ["ILOVESHOUTING@WRDSB.CA"]
    }
];

//TO DO: Determine what information will be displayed for each AP resource
var ap_resources = [
    {
        "name": "ap calc",
        "course_code": "MCV4UIW",
        "course_type": "Math",
        "grade": "12",
        "course_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas alias numquam accusantium placeat aut sit est dolores recusandae ea, perspiciatis repellat, rerum, sapiente cum molestiae reprehenderit? Placeat, perspiciatis eligendi.",
        "prerequisits": ['gr 11 math ', 'gr 10 math']
    },
    {
        "name": "ap chem",
        "course_code": "SH4UIW",
        "course_type": "Sciences",
        "grade": "12",
        "course_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas alias numquam accusantium placeat aut sit est dolores recusandae ea, perspiciatis repellat, rerum, sapiente cum molestiae reprehenderit? Placeat, perspiciatis eligendi.",
        "prerequisits": ['gr 11 chem ', 'gr 10 sciences']
    },
    {
        "name": "ap physics",
        "course_code": "SPH4UIW",
        "course_type": "Sciences",
        "grade": "12",
        "course_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas alias numquam accusantium placeat aut sit est dolores recusandae ea, perspiciatis repellat, rerum, sapiente cum molestiae reprehenderit? Placeat, perspiciatis eligendi.",
        "prerequisits": ['gr 11 chem ', 'gr 10 sciences']
    },
    {
        "name": "ap functions",
        "course_code": "MF4UI",
        "course_type": "Math",
        "grade": "11",
        "course_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas alias numquam accusantium placeat aut sit est dolores recusandae ea, perspiciatis repellat, rerum, sapiente cum molestiae reprehenderit? Placeat, perspiciatis eligendi.",
        "prerequisits": ['gr 11 chem ', 'gr 10 sciences']
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
