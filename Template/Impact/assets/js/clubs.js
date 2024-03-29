//The function on this page will build club boxes on clubs.html
async function buildClubBlocks() {
  if (!dataFetched) {
    await fetchData();
  }

  let section = document.getElementById('clubs-content-2');

  for (const info of clubs) {
    let container = document.createElement('div'); container.classList.add('club-containers'); container.id=info.id;
      let header = document.createElement('div'); header.classList.add('club-header');
      //we will uncomment this when we have actual photos...
      //let club_logo = document.createElement('img'); club_logo.src = info.club_logo;
        let club_name = document.createElement('h4'); club_name.innerHTML = info.name; club_name.id=info.id.concat("-title"); club_name.classList.add('box-title');
        header.appendChild(club_name);
      container.appendChild(header);
      let body = document.createElement('div');
        let club_description = document.createElement('h6'); club_description.innerHTML = "About: ".concat(info.description);
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

async function buildClubButtons() {
  if(!dataFetched) {
    await fetchData();
  }

  let section = document.getElementById('wciClubs');

  for(const obj of clubs){
      let item = document.createElement('li'); item.classList.add('menu-button'); item.innerHTML = obj.name; item.id = obj.id.concat("-link");
      section.appendChild(item);

      document.getElementById(obj.id.concat("-link")).addEventListener('click', function() {
        var name = obj.name;
        var boxes = document.getElementsByClassName('club-containers');
        for(var i = 0; i < boxes.length; i++){
          document.getElementById(boxes[i].id).style.display='none'
          if(boxes[i].id.slice(-6) == obj.id){
            document.getElementById(boxes[i].id).style.display='block'
          }
        }
      })

      document.getElementById('all-btn').addEventListener('click', function() {
        var boxes = document.getElementsByClassName('club-containers');
        for(var i = 0; i < boxes.length; i++){
          document.getElementById(boxes[i].id).style.display='block'
        }
      })
  }
}

// Clubs search bar
function searchClubs() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("clubSearch");
  filter = input.value.toUpperCase();
  var titles = document.getElementsByClassName('box-title');
  var boxes = document.getElementsByClassName('club-containers');

  for(var i = 0; i < titles.length; i++){

    if(filter == titles[i].innerHTML.toUpperCase()){

      var box_id = (titles[i].id).slice(0, -6);
      
      for(var i = 0; i < boxes.length; i++){
        boxes[i].style.display='none';
        document.getElementById('warning-message').style.display = 'none';
      }

      document.getElementById(box_id).style.display='block';
    }

    if (filter == ''){
      document.getElementById('warning-message').style.display = 'none';
      for(var i = 0; i < boxes.length; i++){
        boxes[i].style.display='block';
      }
    }

    if(filter !== titles[i] && filter !== ''){
      document.getElementById('warning-message').style.display = 'block';
    }

  }
}
