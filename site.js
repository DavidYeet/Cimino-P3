/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            title: "IMDB + David's Top 8 Movies",
            owner: "David Cimino",
            github: "https://github.com/DavidYeet",
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */

              switch (dateArray) {
                case 0:
                time = "January";
                break;
                case 1:
                time = "Feburary";
                break;
                case 2:
                time = "March";
                break;
                case 3:
                time = "April";
                break;
                case 4:
                time = "May";
                break;
                case 5:
                day = "June";
                break;
                case 6:
                time = "July";
                break;
                case 7:
                time = "August";
                break;
                case 8:
                time = "September";
                break;
                case 9:
                time = "October";
                break;
                case 10:
                time = "November";
                break;
                case 11:
                time = "December";
                break;
              }
              return month + " " dateArray[2] + ", " dateArray
            }
      }

})

vue_app.mount("#vue_app")
