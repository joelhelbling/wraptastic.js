var Wraptastic = function(lineLength) {

  function isANumber(num) {
    return !isNaN(parseInt(num));
  }

  function isValidLineLength(num) {
    return num != null && isANumber(num);
  }

  if (!isValidLineLength(lineLength)) {
    throw "Hey!"
  }

  var object = {
    lineLength: lineLength,
    wrap: function(theString) {
      var regex = new RegExp("(.{"+lineLength.toString()+"})\\s*")
      return _.without(theString.split(regex), "");
        /*
      if(theString == "abc def"){
        return theString.split(" ");
      }

      return [theString];
      */
    }
  }

  return object;
}
