import { ObjectName } from './../js/object_name.js';

describe('Object', function() {

  it('test phrase', function() {
    var object = new Object(propertyInput)
    expect(object.propertyInput).toEqual(propertyInput)


  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var object = new Object(propertyInput)
    expect(object.methodName()).toEqual(expectedOutput);
  });

});
