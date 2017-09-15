import { Doctor } from './../js/doctor.js';

$(function() {
  $('#med-issue-form').submit(function(event) {
    event.preventDefault();
    var medIssue = $('#med-issue').val();
    var doctor = new Doctor();
    var output = doctor.findMedIssue(medIssue);
    output.forEach(function(doctor) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#find-doc-form').submit(function(event) {
    event.preventDefault();
    var docName = $('#doc-name').val();
    var doctor = new Doctor();
    var output = doctor.findDoctor(name);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
