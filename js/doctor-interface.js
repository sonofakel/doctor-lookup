var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#med-issue-form').submit(function() {
    event.preventDefault();
    let medIssue = $('#med-issue').val();

    $('#med-issue').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${medIssue}&location=47.6129432%2C-122.4821474%2C100&user_location=47.6129432%2C-122.4821474&skip=0&limit=25&user_key=${apiKey}`;
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
      let body = JSON.parse(response);
      let bodyArray = body.data;
      $('#solution').text("");
      console.log(bodyArray[2]);
      debugger;
      if(bodyArray.length === 0) {
        $("#solution").text("0 Doctors Found")
      } else {
        for (let i = 0; i < bodyArray.length; i++) {
          $('#solution').append(`<h3> ${bodyArray[i].profile.first_name} ${bodyArray[i].profile.last_name} </h3>`);
          $('#solution').append(`<li> Address: ${bodyArray[i].practices[0].visit_address.street}, ${bodyArray[i].practices[0].visit_address.city}, ${bodyArray[i].practices[0].visit_address.state}, ${bodyArray[i].practices[0].visit_address.zip} </li>`);
          $('#solution').append(`<li> Phone Number: ${bodyArray[i].practices[0].phones[0].number} </li>`);
          if (bodyArray[i].practices[0].website !== undefined) {
            $('#solution').append(`<li> Website: ${bodyArray[i].practices[0].website} </li>`);
            $('#solution').append(`<li> Accepting New Patients: ${bodyArray[i].practices[0].accepts_new_patients
            } </li>`);
          }
        }
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});

$(document).ready(function() {
  $('#doc-name-form').submit(function() {
    event.preventDefault();
    let docName = $('#doc-name').val();

    $('#doc-name').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=47.6129432%2C-122.4821474%2C100&user_location=47.6129432%2C-122.4821474&skip=0&limit=25&user_key=${apiKey}`;
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
      let body = JSON.parse(response);
      let bodyArray = body.data;
      $('#solution2').text("");
      console.log(bodyArray[2]);
      if(bodyArray.length === 0) {
        $("#solution2").text("0 Doctors Found")
      } else {
        for (let i = 0; i < bodyArray.length; i++) {
          $('#solution2').append(`<h3> ${bodyArray[i].profile.first_name} ${bodyArray[i].profile.last_name} </h3>`);
          $('#solution2').append(`<li> Address: ${bodyArray[i].practices[0].visit_address.street}, ${bodyArray[i].practices[0].visit_address.city}, ${bodyArray[i].practices[0].visit_address.state}, ${bodyArray[i].practices[0].visit_address.zip} </li>`);
          $('#solution2').append(`<li> Phone Number: ${bodyArray[i].practices[0].phones[0].number} </li>`);
          if (bodyArray[i].practices[0].website !== undefined) {
            $('#solution2').append(`<li> Website: ${bodyArray[i].practices[0].website} </li>`);
            $('#solution2').append(`<li> Accepting New Patients: ${bodyArray[i].practices[0].accepts_new_patients
            } </li>`);
          }
        }
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
