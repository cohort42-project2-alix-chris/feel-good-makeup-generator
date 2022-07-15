// Pseudo Code

// Create namespace object to hold our app
const animaliaApp = {};
// Create an init method
animaliaApp.init = () => {
    
}

// Make an API call to zooaminal api
animaliaApp.url = "http://makeup-api.herokuapp.com/api/v1/products.json"

fetch(animaliaApp.url)
        .then(response => {
            // get the response object
            console.log(response);
            // parse the info into json
            return response.json();
        })
        .then(jsonData => {
            // we now have the json data we can work with
            console.log(jsonData);
            // call the displayPhotos method 

        })
// Make an API call to zooaminal api
    // return a single random zoo animal object
    // use the / animals / rand endpoint
 
// A landing page with the app heading 'animalia' and a welcome message 'Learn more about wild animals'

// A form containing 2 drop down menus to select 1- one of the 6 types of animals and 2- whether it's a day or night animal (diurnal vs. nocturnal)

// Listen to the submit on button to capture the user selection

// Store the user selection into separate variables

// Make an AJAX request to retrieve third party API data matching the user selection

// Build a randomizer to randomly select an animal from the returned array

// Display the returned animal facts in a html text element

// Calling the init method
animaliaApp.init();