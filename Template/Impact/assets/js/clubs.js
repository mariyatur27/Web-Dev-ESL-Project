//The function on this page will build club boxes on clubs.html
async function buildClubBlocks() {
  if (!dataFetched) {
    await fetchData();
  }

  let section = document.getElementById('clubs-content-2');

  for (const info of clubs) {
    let container = document.createElement('div');
      let header = document.createElement('div');
        let club_logo = document.createElement('img'); club_logo.src = info.club_logo;
        let club_name = document.createElement('h4'); club_name.innerHTML = info.name;
      container.appendChild(header);
      let body = document.createElement('div');
        let club_description = document.createElement('p'); club_description.innerHTML = info.description;
        let club_meeting_time = document.createElement('h6'); club_meeting_time.innerHTML = info.meeting_time;
        let club_meeting_place = document.createElement('h6'); club_meeting_place.innerHTML = info.meeting_place;
        let club_google_classroom_code = document.createElement('h6'); club_google_classroom_code.innerHTML = info.google_classroom_code;
        let student_leader_contacts = document.createElement('h6'); club_google_classroom_code.innerHTML = info.student_leader_contacts;
      container.appendChild(body);
    section.appendChild(container);
  }

}

// Clubs search bar
function searchClubs() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("clubSearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("wciClubs");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}