var ObjectName = require('./../js/object_name.js').objectModule;

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
