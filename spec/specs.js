describe("pigLatin", function() {
  it ("adds 'ay' to the end of the word", function (){
    pigLatin("egg").should.equal("eggay");
  });

