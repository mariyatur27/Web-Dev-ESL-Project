//The function on this page will build ap resources boxes on ap_resources.html
async function buildApResourcesBlocks() {
    if(!dataFetched){
        await fetchData();
    }

    let section = document.getElementById('ap-resources-content');

    for(const info of ap_resources){
        console.log(info.name)
    }

}