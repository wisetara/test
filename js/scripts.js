var factorial = function(number) {
        
  if (number === 0) {
    return 1;
  } else {
     var result = 1;
     for (var count = 2; count <= number; count++)
     result = result * count; 
     return result;  
  };
};


