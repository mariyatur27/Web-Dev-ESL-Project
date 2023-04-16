//The function on this page will build english resources boxes on english_examination_resources.html
async function buildEnglishResourcesBlocks() {
    if(!dataFetched){
        await fetchData();
    }

    let section = document.getElementById('english-examination-resources-content');

    console.log(english_examination_resources);

    for(const info of english_examination_resources){

        const content_box = document.createElement("div");
        content_box.classList.add("eng-exam-content-box");

        const resource = document.createElement("h1");
        resource.innerHTML = info.name;
        resource.classList.add("eng-exam-content-box-title");
        content_box.appendChild(resource);

        const text = document.createElement("p");
        text.classList.add("eng-exam-content-box-text");
        text.innerHTML = info.description + info.score + info.tip;
        content_box.appendChild(text);

        const link = document.createElement("button");
        link.onclick = () => { window.location = info.link };
        link.classList.add("eng-exam-content-box-button");
        link.innerHTML = "Link";
        content_box.appendChild(link);

        const practice = document.createElement("button");
        practice.onclick = () => { window.location = info.practice };
        practice.classList.add("eng-exam-content-box-button");
        practice.innerHTML = "Practice";
        content_box.appendChild(practice);

        section.appendChild(content_box);
    }
}