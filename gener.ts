const axios = require('axios').default;
var fs = require('fs'); 
// Make a request for a user with a given ID
function addcss(name){
    axios.get("https://chargde-porcupine.github.io/Elezar/" + name + ".css")
  .then(function (response) {
    // handle success
    fs.appendFile('elzgen.css', '\n'+response.data, function (err) {
        if (err) throw err;
        console.log('Saved!');
        }); 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

//the code below is for the main file.
//const readline = require('readline').createInterface({
//  input: process.stdin,
//  output: process.stdout
//});

//readline.question(`Enter The Class You Want To Install: `, name => {
//  addcss(name);
//  readline.close();
//});

