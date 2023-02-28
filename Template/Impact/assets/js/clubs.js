//The function on this page will build club boxes on clubs.html
async function buildClubBlocks() {
    if(!dataFetched){
        await fetchData();
    }

    let section = document.getElementById('clubs-content');

    for(const info of clubs){
        console.log(info)
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