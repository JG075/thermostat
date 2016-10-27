describe("Thermostat", function() {
  var myThermo;

  beforeEach(function() {
    myThermo = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(myThermo.temperature).toEqual(20);
  });

  it("allows temperature to be increased", function() {
    myThermo.up();
    expect(myThermo.temperature).toEqual(21);
  });

  it("allows temperature to be decreased", function() {
    myThermo.down();
    expect(myThermo.temperature).toEqual(19);
  });

  it("will not allow temperature to go below minimum", function() {
    myThermo.temperature = myThermo.minTemp;
    myThermo.down();
    expect(myThermo.temperature).toEqual(myThermo.minTemp);
  });

  it("when power saving mode is on, max temperature is 25", function() {
    myThermo.setPowerSavingMode(true);
    expect(myThermo.maxTemp).toEqual(25);
  });

  it("when power saving mode is off, max temperature is 32", function() {
    myThermo.setPowerSavingMode(false);
    expect(myThermo.maxTemp).toEqual(32);
  });

  it("doesn't allow temperature increase above maximum temperature", function() {
    myThermo.setPowerSavingMode(true);
    myThermo.temperature = 25;
    myThermo.up();
    expect(myThermo.temperature).toEqual(25);
  });

  it("maximum temperature is 25 by default", function() {
    expect(myThermo.maxTemp).toEqual(25);
  });
});
