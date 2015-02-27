newspaper.factory('BeatsFactory', function BeatsFactory(ReportersFactory) {
  var factory = {};
  factory.beats = [];
  factory.Beat = {};
  factory.ReportersFactory = ReportersFactory

  factory.createBeat = function(name) {
    var newBeat =  Object.create(factory.Beat) 
    newBeat.name = name;
    newBeat.id = factory.beats.length + 1
    newBeat.reporters = [];
    factory.beats.push(newBeat);
    return newBeat;
  };

  factory.Beat.addReporter = function(reporter) {
    this.reporters.push(reporter);
    reporter.beats.push(this);
  };


  var seamen = factory.createBeat("Legendary Seamen");
  var threats = factory.createBeat("Threats to all Mankind");
  var sightings = factory.createBeat("Supernatural Sightings");
  var krang = factory.createBeat("Quahog and Krang");
  var animals = factory.createBeat("Animal Communication")

  var loisLane = ReportersFactory.newReporter('Lois Lane', 25, 'August 9th, 1975');
  var aprilOneil = ReportersFactory.newReporter('April ONeil', 11, 'April 15th, 1983');
  var jonahJameson = ReportersFactory.newReporter('J. Jonah Jameson', 29, 'September 12th, 1965');
  var jackMckgee = ReportersFactory.newReporter('Jack MckGee', 3, 'December 3rd, 1991');
  var dianeSimmons = ReportersFactory.newReporter('Diane Simmons', 19, 'June 10th, 1971');
  var ronBurgundy = ReportersFactory.newReporter('Ron Burgundy', 243, 'Sometime during the ming dynasty');

  seamen.addReporter(ronBurgundy);
  seamen.addReporter(dianeSimmons);
  threats.addReporter(loisLane);
  threats.addReporter(jackMckgee);
  sightings.addReporter(jonahJameson);
  sightings.addReporter(loisLane);
  krang.addReporter(aprilOneil);
  krang.addReporter(dianeSimmons);
  animals.addReporter(ronBurgundy);
  animals.addReporter(aprilOneil);

  return factory;
});
