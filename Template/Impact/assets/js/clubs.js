//The function on this page will build club boxes on clubs.html
async function buildClubBlocks() {
    if(!dataFetched){
        await fetchData();
    }

    let section = document.getElementById('clubs-content');

    for(const info of clubs){
        console.log(info.name)
    }

}