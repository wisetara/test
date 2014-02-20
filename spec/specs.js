describe("factorial", function() {
  it ("returns 1 when user enters 0", function() {
    factorial(0).should.equal(1);
  });

  it ("multiplies a number by all of the positive integers less than number", function (){
    factorial(5).should.equal(120);
  });
});

