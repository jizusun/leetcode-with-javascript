const {run} = require('lib');
const index = require('./index');

const runTests = NumArray => {

  it('basic', ()=> {
    const operations = ['NumArray','sumRange','sumRange','sumRange'];
    const operands = [[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]];
    const expects = [null,1,-1,-3] ;

    // a little bit ugly
    const initialVals = operands[0][0];
    const obj = new NumArray(initialVals);
    operations.splice(0,1);
    operands.splice(0,1);
    expects.splice(0,1);

    operations.forEach( (op, idx) => {
      const operand = operands[idx];
      const expected = expects[idx];
      const actual = obj[op](...operand);
      expect(actual).toEqual(expected);
    });
  });
};
run(index, runTests);
