//The function on this page will build english resources boxes on english_examination_resources.html
async function buildEnglishResourcesBlocks() {
    if(!dataFetched){
        await fetchData();
    }

    let section = document.getElementById('english-examination-resources-content');

    for(const info of english_examination_resources){
        const resource = document.createElement("h1")
        resource.innerHTML = info.name

        section.appendChild(resource)
    }
}