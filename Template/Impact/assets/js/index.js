/*
This File will be focousing on making the index.html page more dynamic.
*/

/* For the Home page */

//Call the element
var homeButton = document.getElementById("homeButton");

//Add an event listiner
homeButton.addEventListener("click", function (event){

    //Prevetn the defult behaviour
    event.preventDefault()
    
    
    //Load the html content
    const xhr = new XMLHttpRequest();

    //Load it into the html
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) 
        {

          //Collect the main tag
          var content = document.getElementById("PageContent")
          content.innerHTML = this.responseText;
        }
      };

    xhr.open('GET', 'assets/templates/mainPage/home.html', true);
    xhr.send();
});




/* For the aboutUs page */

//Call the element
var aboutButton = document.getElementById("aboutButton");

//Add an event listiner
aboutButton.addEventListener("click", function (event){

    //Prevetn the defult behaviour
    event.preventDefault()
    
    //change url
    history.pushState(null, null, "/about-us");
    
    //Load the html content
    const xhr = new XMLHttpRequest();

    //Load it into the html
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) 
        {

          //Collect the main tag
          var content = document.getElementById("PageContent")
          content.innerHTML = this.responseText;
        }
      };

    xhr.open('GET', 'assets/templates/mainPage/aboutUs.html', true);

    xhr.send();
    
});


/* For the Contact page */

//Call the element
var contactButton = document.getElementById("contactButton");

//Add an event listiner
contactButton.addEventListener("click", function (event){

    //Prevetn the defult behaviour
    event.preventDefault()
    
    
    //Load the html content
    const xhr = new XMLHttpRequest();

    //Load it into the html
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) 
        {

          //Collect the main tag
          var content = document.getElementById("PageContent")
          content.innerHTML = this.responseText;
        }
      };

    xhr.open('GET', 'assets/templates/mainPage/contactUs.html', true);
    xhr.send();
    
});
