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
      console.log(body);
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
        console.log(body);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
      });
    });

// $(function() {
//   $('#med-issue-form').submit(function(event) {
//     event.preventDefault();
//     var medIssue = $('#med-issue').val();
//     var doctor = new Doctor();
//     var output = doctor.test(medIssue);
//     console.log(doctor.test(medIssue));
//     // output.forEach(function(doctor) {
//     //   $('#solution').append("<li>" + element + "</li>");
//     // });
//   });
//   });
// $(function() {
//   $('#find-doc-form').submit(function(event) {
//     event.preventDefault();
//     var docName = $('#doc-name').val();
//     var doctor = new Doctor();
//     var output = doctor.findDoctor(name);
//     output.forEach(function(element) {
//       $('#solution2').append("<li>" + element + "</li>");
//     });
//   });
//
// });
