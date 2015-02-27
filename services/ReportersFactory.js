newspaper.factory('ReportersFactory', function ReportersFactory() {
  var factory = {};
  factory.reporters = [];
  factory.Reporter = {};

  factory.newReporter = function(name, yearsEmployed, birthday) {
    var reporter = Object.create(factory.Reporter);
    reporter.name = name;
    reporter.yearsEmployed = yearsEmployed;
    reporter.birthday = birthday;
    reporter.id = (factory.reporters.length + 1)
    reporter.beats = [];
    factory.reporters.push(reporter);
    return reporter;
  };

  return factory;
});
