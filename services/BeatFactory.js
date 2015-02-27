newspaper.factory('BeatFactory', function BeatFactory(ReporterFactory) {
  factory = {};
  factory.beats = [];
  factory.Beat = {};
  factory.ReporterFactory = ReporterFactory

  factory.createBeat = function(name) {
    newBeat =  Object.create(factory.Beat) 
    newBeat.name = name;
    newBeat.id = factory.beats.length + 1
    newBeat.reporters = [];
    factory.beats.push(beat);
  };

  factory.Beat.addReporter = function(reporter) {
    this.reporters.push(reporter);
    reporter.beats.push(this);
  };


  seamen = factory.createBeat("Legendary Seamen");
  threats = factory.createBeat("Threats to all Mankind");
  sightings = factory.createBeat("Supernatural Sightings");
  krang = factory.createBeat("Quahog and Krang");
  animals = factory.createBeat("Animal Communication")

  loisLane = ReporterFactory.newReporter('Lois Lane', 25, 'August 9th, 1975');
  aprilOneil = ReporterFactory.newReporter('April O\'Neil'), 11, 'April 15th, 1983';
  jonahJameson = ReporterFactory.newReporter('J. Jonah Jameson', 29, 'September 12th, 1965');
  jackMckgee = ReporterFactory.newReporter('Jack MckGee', 3, 'December 3rd, 1991');
  dianeSimmons = ReporterFactory.newReporter('Diane Simmons', 19, 'June 10th, 1971');
  ronBurgundy = ReporterFactory.newReporter('Ron Burgundy', 243, 'Sometime during the ming dynasty');

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
