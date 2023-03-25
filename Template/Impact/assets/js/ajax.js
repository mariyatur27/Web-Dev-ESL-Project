/*****************
 * Program Name: Ajax.js
 * Programmer name: Ali Rahbar
 * Date: March 25, 2023
 * What code does: This code controls the page changes using ajax
 *****************/





//Check For change in URL with an eventListiner
window.addEventListener('hashchange', function(event)
    {
        //prevent defult action
        event.preventDefault();

        //Get the new Hash
        let newHash = window.location.hash;

        console.log(newHash);
    });
