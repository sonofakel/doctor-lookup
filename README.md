# Boilerplate Instructions

## Initial set up of Boilerplate

### Rename root directory, and files in js and spec.

`mv javascript-boilerplate your-project-name`

etc

### Commands to run after cloning locally

#### Install `npm` and `bower` dependencies after cloning

```
npm install
```
```
bower install
```
```
gulp build
```

## Blank fields to fill through Boilerplate

### index.html

- `TitleOfSite`

```
<script src="bower_components/moment/min/moment.min.js"></script>
<title>TitleOfSite</title>
</head>
```

### object_name.js

- Change the `object_name.js` file name to the name of the object_name.

- `ObjectName` - name of object_name
- `propertyInput` - name of parameter being passed into the constructor when instantiated.
- `this.property` - name of property
- `MethodName` - name of method
- `InputParameter` - ***optional***
- `object`Module - name of object placed before "Module"


### object-name-interface.js


- Change the `object_name-interface.js` file name to the name of the object_name and end with `-interface`.

- `ObjectName` - name of object_name
- `object_name.js` - name of object file
- `object`Module - name of object placed before "Module"
- `#name-of-form` - name of form id referenced in `index.html`
- `nameOfField` - variable name referencing field value
- `#field-id` - name of field id referenced in `index.html`
- `newObject` - variable name referencing creating a new object from constructor
- `propertyInput` - name of parameter being passed into the constructor when instantiated.
- `InputParameter` - ***optional***


```
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
  ```
