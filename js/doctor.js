export class Doctor {
constructor () {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.phone = phone;
  this.website = website;
  this.accepting = accepting;

}

findMedIssue(medIssue) {
  let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url =
      `https://api.betterdoctor.com/2016-03-01/doctors?query=${medIssue}&location=47.6129432%2C-122.4821474%2C100&user_location=47.6129432%2C-122.4821474&skip=0&limit=10&user_key=a33954329347ce04eae5cdc962532af5`;
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

    promise.then(function(response) {
     body = JSON.parse(response);
     return body;
    //  $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
    //  $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
   }, function(error) {
     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
   });

}

findDoctorByName(name) {

}
};
