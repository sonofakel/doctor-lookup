import { ObjectName } from './../js/object_name.js';

$(function() {
  $('#name-of-form').submit(function(event) {
    event.preventDefault();
    var nameOfField = $('#field-id').val();
    var newObject = new ObjectName(propertyInput);
    var output = newObject.methodName(InputParameter);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
