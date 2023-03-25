/*********************
 * Program Name: Ajax.js
 * Programmer name: Ali Rahbar
 * Date: March 25, 2023
 * What code does: This code controls the page changes using ajax
 *********************/

//Load page elements
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

//The object That controls the website content
const websiteContent = 
{


    /*************
     * Method Name: loadHomePage
     * Date: March 25, 2023
     * Discription of Method: This method loads the content in the homePage
     *************/

    loadHomePage() 
    {
        //Load the html content
        const xhr = new XMLHttpRequest();

        //Load it into the html
        xhr.onreadystatechange = function() 
        {
            //If there is no errors
            if (this.readyState === 4 && this.status === 200) 
            {

                //Collect the main tag
                var content = document.getElementById("PageContent");

                //Change the content
                content.innerHTML = this.responseText;

            
            }
        };

        //Open the html
        xhr.open('GET', 'assets/templates/mainPage/home.html', true);

        //Submit the page
        xhr.send();
    },


    /*************
     * Method Name: loadAboutPage
     * Date: March 25, 2023
     * Discription of Method: This method loads the content in the aboutPage
     *************/

    loadAboutPage()
    {
        //Load the html content
        const xhr = new XMLHttpRequest();

        //Load it into the html
        xhr.onreadystatechange = function() 
        {
            //If there is no errors
            if (this.readyState === 4 && this.status === 200) 
            {

            //Collect the main tag
            var content = document.getElementById("PageContent");

            //Change the content
            content.innerHTML = this.responseText;
            }
        };

        //Open the html
        xhr.open('GET', 'assets/templates/mainPage/aboutUs.html', true);

        //Submit the page
        xhr.send();
    },


    /*************
     * Method Name: loadHContactPage
     * Date: March 25, 2023
     * Discription of Method: This method loads the content in the contactPage
     *************/

    loadContactPage()
    {
        //Load the html content
        const xhr = new XMLHttpRequest();

        //Load it into the html
        xhr.onreadystatechange = function() 
        {
            //If there is no errors
            if (this.readyState === 4 && this.status === 200) 
            {

            //Collect the main tag
            var content = document.getElementById("PageContent");

            //Change the content
            content.innerHTML = this.responseText;
            }
        };

        //Open the html
        xhr.open('GET', 'assets/templates/mainPage/contactUs.html', true);

        //Submit the page
        xhr.send();
    },


    /*************
     * Method Name: loadEnglishExaminationPage
     * Date: March 25, 2023
     * Discription of Method: This method loads the content in the englishExaminationPage
     *************/

    loadEnglishExaminationPage()
    {
        //Load the html content
        const xhr = new XMLHttpRequest();

        //Load it into the html
        xhr.onreadystatechange = function() 
        {
            //If there is no errors
            if (this.readyState === 4 && this.status === 200) 
            {

            //Collect the main tag
            var content = document.getElementById("PageContent");

            //Change the content
            content.innerHTML = this.responseText;
            }
        };

        //Open the html
        xhr.open('GET', 'assets/templates/mainPage/english_examination_resources.html', true); //ToDo

        //Submit the page
        xhr.send();
    },


    /*************
     * Method Name: loadSchoolClubsPage
     * Date: March 25, 2023
     * Discription of Method: This method loads the content in the schoolClubsPage
     *************/

    loadSchoolClubsPage()
    {
        //Load the html content
        const xhr = new XMLHttpRequest();

        //Load it into the html
        xhr.onreadystatechange = function() 
        {
            //If there is no errors
            if (this.readyState === 4 && this.status === 200) 
            {

            //Collect the main tag
            var content = document.getElementById("PageContent");

            //Change the content
            content.innerHTML = this.responseText;
            }
        };

        //Open the html
        xhr.open('GET', 'assets/templates/mainPage/home.html', true); //ToDo

        //Submit the page
        xhr.send();
    },


    /*************
     * Method Name: loadAdvancedPlacmentPage
     * Date: March 25, 2023
     * Discription of Method: This method loads the content in the advancedPlacmentPage
     *************/

    loadAdvancedPlacmentPage()
    {
        //Load the html content
        const xhr = new XMLHttpRequest();

        //Load it into the html
        xhr.onreadystatechange = function() 
        {
            //If there is no errors
            if (this.readyState === 4 && this.status === 200) 
            {

            //Collect the main tag
            var content = document.getElementById("PageContent");

            //Change the content
            content.innerHTML = this.responseText;
            }
        };

        //Open the html
        xhr.open('GET', 'assets/templates/mainPage/home.html', true); //ToDo

        //Submit the page
        xhr.send();
    },

};


//Detect the changes
function detectChanges(newHash)
{
    switch(newHash)
    {
       case "":
        /* if the url is pointing to the home page */

        websiteContent.loadHomePage();
        break;

       case "#about-us":
        /* if the url is pointing to the about us page */

        websiteContent.loadAboutPage();
        break;

       case "#contact-us":
        /* if the url is pointing to the contact us page */

        websiteContent.loadContactPage();

        break;

       
       case "#english-examination-page":

        /* if the url is pointing to the english examination page */

        websiteContent.loadEnglishExaminationPage();

        break;

       case "#school-clubs":

        /* if the url is pointing to the school clubs page */

        websiteContent.loadSchoolClubsPage();

        break;

       case "#advanced-placment":

        /* if the url is pointing to the advanced placment Page */

        websiteContent.loadAdvancedPlacmentPage();

        break;

    };

};


//Check For change in URL with an eventListiner
window.addEventListener('hashchange', function(event)
    {
        //prevent defult action
        event.preventDefault();

        //Get the new Hash
        let newHash = window.location.hash;

        //Detect the changes
        detectChanges(newHash);
    });



//When page is loaded for the first time

//Get the new Hash
let newHash = window.location.hash;

//Detect the changes
detectChanges(newHash);