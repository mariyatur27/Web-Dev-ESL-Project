/*****************
 * Program Name: websiteContent.js
 * Programmer name: Ali Rahbar
 * Date: March 25, 2023
 * What code does: This cis the object that controls the content of the webpage
 *****************/

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