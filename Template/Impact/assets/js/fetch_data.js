//Local database

//TO DO: Determine what information will be displayed for each club
var clubs = [
    {
        "name": "WCI Web Dev-1",
        "id": 'club-1',
        "description" : "Web development club",
        "club_logo": "coming soon",
        "meeting_time": "2:30 pm Tuesdays",
        "meeting_place": "Room 400",
        "google_classroom_code": "",
        "student_leader_contacts": ["john_doe@thisisnotarealaddress.com", "jane_doe@alsonotarealaddress.com"]
    },
    {
        "name": "Astronomy",
        "id": 'club-2',
        "description" : "Wow this club is so awesome you should join it!!!",
        "club_logo": "coming soon",
        "meeting_time": "26:72 PM last week",
        "meeting_place": "Room √-1",
        "google_classroom_code": "aaaaaaa",
        "student_leader_contacts": ["mkddwuhdwwiudf3f@no.com"]
    },
    {
        "name": "Fight Club",
        "id": 'club-3',
        "description" : "The first rule of Fight Club is: you do not talk about Fight Club.",
        "club_logo": "",
        "meeting_time": "",
        "meeting_place": "",
        "google_classroom_code": "",
        "student_leader_contacts": []
    },
    {
        "name": "Rickrolling Club",
        "id": 'club-4',
        "description" : "Never gonna give you up, never gonna let you down...",
        "club_logo": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "meeting_time": "3:32",
        "meeting_place": "",
        "google_classroom_code": "dqw4w9w",
        "student_leader_contacts": ["rick_astley@gmail.com"]
    },
    {
        "name": "Random Keysmashing Club",
        "id": 'club-5',
        "description" : "diuhyfejfew3rh9ufh98fewj9cinucewiuewj8efw8jefw",
        "club_logo": "dwnud3h897g65t6y7u8ioigvbnjklo",
        "meeting_time": "d75rtyc",
        "meeting_place": "i9p][ppewfdefw",
        "google_classroom_code": "efwo;k;plof;lok;klo",
        "student_leader_contacts": ["ahbsnoinojfen@gmail.com"]
    },
    {
        "name": "CAPS LOCK CLUB",
        "id": 'club-6',
        "description" : "CAPS LOCK IS AWESOME!!! JOIN US TO DISCUSS WHY YOU SHOULD HAVE CAPS LOCK ON ALL THE TIME!!!",
        "club_logo": "",
        "meeting_time": "AA:AA EVERY TUESDAY",
        "meeting_place": "ROOM AAA",
        "google_classroom_code": "C4PSL0K",
        "student_leader_contacts": ["ILOVESHOUTING@WRDSB.CA"]
    }
];

var ap_resources = [
    {
        "id": "ap-1",
        "name": "Physics (11)",
        "course_code": "SPH3UW",
        "course_description": "Lorem ipsum dolor sit amet",
        "grade": "11",
        "course_type": "Science",
        "prerequisits": ["SNC2D"],
        "special_class": "portion-1"
    },
    {
        "id": "ap-2",
        "name": "Physics (12)",
        "course_code": "SPH4UW",
        "course_description": "Lorem ipsum dolor sit amet",
        "grade": "12",
        "course_type": "Science",
        "prerequisits": ["SPH3U"],
        "special_class": "portion-1"
    },
    {
        "id": "ap-3",
        "name": "Chemistry",
        "course_code": "SCH4UW",
        "course_description": "Lorem ipsum dolor sit amet",
        "grade": "12",
        "course_type": "Science",
        "prerequisits": ["SCH3U"],
        "special_class": "portion-1"
    },
    {
        "id": "ap-4",
        "name": "Biology",
        "course_code": "SBI4UW",
        "course_description": "Lorem ipsum dolor sit amet",
        "grade": "12",
        "course_type": "Science",
        "prerequisits": ["SBI3U"],
        "special_class": "portion-1"
    },
    {
        "id": "ap-5",
        "name": "English",
        "course_code": "ENG4UW",
        "course_description": "Lorem ipsum dolor sit amet",
        "grade": "12",
        "course_type": "English",
        "prerequisits": ["ENG3U/NBE3U"],
        "special_class": "portion-1"
    },
    {
        "id": "ap-6",
        "name": "French",
        "course_code": "FEF/FSF4UW",
        "course_description": "Lorem ipsum dolor sit amet",
        "grade": "12",
        "course_type": "French as a Second Language",
        "prerequisits": ["FEF3U"],
        "special_class": "portion-1"
    },
    {
        "id": "ap-7",
        "name": "Calculus AB/BC",
        "course_code": "MHF4UW/MCV4UW",
        "course_description": "Lorem ipsum dolor sit amet",
        "grade": "12",
        "course_type": "Mathematics",
        "prerequisits": ["MCR3U"],
        "special_class": "portion-2"
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
    "name": "Main Website for IELTS Test",
    "category": "English Proficiency Test resources",
    "description": "The main website for IELTS in Canada, resources on the description of IELTS, practice tests, test fees, and test bookings can be found here",
    "score": "Different for each university, check their website for specific scores. Usually 6.5 overall score.",
    "tip": "If you have not been in a Canadian educational institution for more than four years, consider taking one of the tests below as they are requisite for universities/colleges. ESL years are sometimes NOT considered to be one of the four years(For example, University of Waterloo), make sure you contact your post-secondary institutions to make sure.(Can be put on the website if you guys want to add some clarification).",
    "link": "https://www.google.com/search?q=ielts&rlz=1C1VDKB_zh-CNCA986CA987&oq=IELTS&aqs=chrome.0.0i271j69i57j0i131i433i457i512j0i402l2j69i65j69i60l2.2945j0j4&sourceid=chrome&ie=UTF-8",
    "practice": "https://www.ielts.org/usa/ielts-practice-test"
  },
  {
    "name": "Main website for TOEFL test",
    "category": "English Proficiency Test resources",
    "description": "The leading website for TOEFL in Canada, resources on the description of TOEFL, practice tests, test fees, test bookings can be found here.",
    "score": "Different for each university, check their website for specific scores. Usually 85+ overall score.",
    "tip": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam autem modi sunt repellat quo corrupti reiciendis et deserunt in beatae nesciunt blanditiis cumque, ex quia sint ullam natus odit. Animi",
    "link": "hhttps://www.ets.org/toefl.html",
    "practice": "https://www.ets.org/toefl/test-takers/ibt/prepare/practice-tests.html"
  }, 
  {
    "name": "Main website for CAEL",
    "category": "English Proficiency Test resources",
    "description": "The main website for CAEL in Canada, resources on the description of CAEL, practice tests, test fees, and test bookings can be found here",
    "score": "Different for each university, check their website for specific scores. Usually 60+ overall score.",
    "tip": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam autem modi sunt repellat quo corrupti reiciendis et deserunt in beatae nesciunt blanditiis cumque, ex quia sint ullam natus odit. Animi",
    "link": "http://www.cael.ca/",
    "practice": "https://www.cael.ca/prepare-for-cael/free-resources/"
  },
  {
    "name": "Main website for the Duolingo English Test",
    "category": "English Proficiency Test resources",
    "description": "The main website for the Duolingo English Test in Canada, resources on the description of the Duolingo English Test, practice tests, test fees, and test bookings can be found here",
    "score": "Different for each university, check their website for specific scores. Usually 115+ overall score.",
    "tip": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam autem modi sunt repellat quo corrupti reiciendis et deserunt in beatae nesciunt blanditiis cumque, ex quia sint ullam natus odit. Animi",
    "link": "http://www.cael.ca/",
    "practice": "https://englishtest.duolingo.com/readiness"
  },
  {
    "name": "Main website for the Cambridge English Test",
    "category": "English Proficiency Test resources",
    "description": "The main website for the Cambridge English Test in Canada, resources on the description of the Cambridge English Test, practice tests, test fees, and test bookings can be found here",
    "score": "Different for each university, check their website for specific scores. Usually 176+ overall score.",
    "tip": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam autem modi sunt repellat quo corrupti reiciendis et deserunt in beatae nesciunt blanditiis cumque, ex quia sint ullam natus odit. Animi",
    "link": "http://www.cael.ca/",
    "practice": "https://www.cambridgeenglish.org/exams-and-tests/advanced/preparation/"
  }
];

//Conneting to the JSON databases to get data from them
var dataFetched = false;

async function fetchData() {
    // console.log(window.location.protocol)
    // if (window.location.protocol == "file:") {
    //     dataFetched = true;
    // } else {
    //     console.log("Starting to load the data");
    //     clubs = await (await fetch("assets/data/clubs.json")).json();
    //     ap_resources = await (await fetch("assets/data/ap_resources.json")).json();
    //     english_examination_resources = await (await fetch("assets/data/english_examination_resources.json")).json();
    //     console.log("done");
    //     }
    // dataFetched = true;
    }
