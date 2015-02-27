newspaper.factory('ReporterFactory', function ReporterFactory() {
  factory = {};
  factory.reporters = [];
  factory.Reporter = {};

  factory.newReporter = function(name, yearsEmployed, birthday) {
    reporter = Object.create(factory.Reporter);
    reporter.name = name;
    repoter.yearsEmployed = yearsEmployed;
    reporter.birthday = birthday;
    reporter.id = (factory.reporters.length + 1)
    reporter.beats = [];
    factory.reporters.push(reporter);
  };

  return factory;
});
