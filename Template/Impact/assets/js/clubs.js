//The function on this page will build club boxes on clubs.html
async function buildClubBlocks() {
  if (!dataFetched) {
    await fetchData();
  }

  let section = document.getElementById('clubs-content-2');

  for (const info of clubs) {
    console.log(info)
    let container = document.createElement('div'); container.classList.add('club-containers');
      let header = document.createElement('div'); header.classList.add('club-header');
      //we will uncomment this when we have actual photos...
      //let club_logo = document.createElement('img'); club_logo.src = info.club_logo;
        let club_name = document.createElement('h4'); club_name.innerHTML = info.name;
        header.appendChild(club_name);
      container.appendChild(header);
      let body = document.createElement('div');
        let club_description = document.createElement('p'); club_description.innerHTML = "About: ".concat(info.description);
        body.appendChild(club_description);
        let club_meeting_time = document.createElement('h6'); club_meeting_time.innerHTML = "Meeting Time: ".concat(info.meeting_time);
        body.appendChild(club_meeting_time);
        let club_meeting_place = document.createElement('h6'); club_meeting_place.innerHTML = "Meeting Place: ".concat(info.meeting_place);
        body.appendChild(club_meeting_place);
        let club_google_classroom_code = document.createElement('h6'); club_google_classroom_code.innerHTML = "Google Classroom: ".concat(info.google_classroom_code);
        
        let subtitle = document.createElement('h6'); subtitle.innerHTML = 'Student Contacts:';
        body.appendChild(subtitle);
        for (var i = 0; i < info.student_leader_contacts.length; i++){
          let student_leader_link = document.createElement('a'); student_leader_link.href = "mailto:".concat(info.student_leader_contacts[i]);
            let student_leader_text = document.createElement('h6'); student_leader_text.innerHTML = info.student_leader_contacts[i];
            student_leader_link.appendChild(student_leader_text);
          body.appendChild(student_leader_link);
        }

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