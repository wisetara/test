/*var fibonacci = function(number) {
   if (number === 1) {
    return 0; 
     } else {
    return 1;
   };
};

var fibAdding = function(factor1, factor2) {
  var result = factor1 + factor2;
  var resultArray = [];
  resultArray.push(result);
  return resultArray;
};


var fibAccess = function(position) {
  var fibArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
  if (position <= 21) {
  return fibArray[position - 2] }
  else {
    alert('Why the hell do you need to know that matey, argggg!');
  }
};*/

var doTheDamnThang = function(position) {
  if (position < 2)
    return position;
  var previous = 0;
  var current = 1;
  for (var index = 2; index < position; index++) {
    var next = previous + current;
    previous = current;
    current = next;
  }
  return current;
};
doTheDamnThang(100)

