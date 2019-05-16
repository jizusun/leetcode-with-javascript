const run = (solutions, runTests) => {
  Object.entries(solutions)
    .forEach( ([name, func]) => {
      describe(`${name}`, runTests.bind(null,func) );
    });
};

module.exports = {
  run
};
