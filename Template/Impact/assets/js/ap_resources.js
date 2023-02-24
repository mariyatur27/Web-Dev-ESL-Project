//The function on this page will build ap resources boxes on ap_resources.html
async function buildApResourcesBlocks() {
    if(!dataFetched){
        await fetchData();
    }

    let section = document.getElementById('ap-resources-content');

    for(const info of ap_resources){
        let container = document.createElement('div'); container.classList.add('ap-container');
            let course_name = document.createElement('h4'); course_name.innerHTML = info.name;
            let course_code = document.createElement('h6'); course_code.innerHTML = info.course_code;
            container.appendChild(course_name);
            container.appendChild(course_code);
            let openup_container = document.createElement('div'); openup_container.classList.add('openup-container');
                let course_description = document.createElement('p'); course_description.innerHTML = info.course_description;
                openup_container.appendChild(course_description);
                let info_block = document.createElement('div'); info_block.classList.add('info-block');
                    let grade = document.createElement('p'); grade.innerHTML = "Grade: ".concat(info.grade);
                    let dep = document.createElement('p'); dep.innerHTML = "Department: ".concat(info.course_type);
                    info_block.appendChild(grade);
                    info_block.appendChild(dep);
                openup_container.appendChild(info_block);
            let requirements = document.createElement('p'); requirements.innerHTML = "Prerequisits: ".concat(info.prerequisits); requirements.style.fontWeight = '500';
            openup_container.appendChild(requirements);
            container.appendChild(openup_container);
        section.appendChild(container);

        container.addEventListener('click', function() {
            openup_container.classList.toggle('openup-container');
        })
    }

}