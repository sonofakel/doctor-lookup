// var apiKey = require('./../.env').apiKey;


export class Doctor {
constructor () {
}

findDocMed(medIssue, apiKey) {
  let bodyArray;
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${medIssue}&location=47.6129432%2C-122.4821474%2C25&user_location=47.6129432%2C-122.4821474&skip=0&limit=25&user_key=${apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then((response) => {
    let body = JSON.parse(response);
    bodyArray = body.data;
    console.log(bodyArray)




  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  } );


}


}
