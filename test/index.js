const should = require('chai').should(),
    ohme = require('../index'),
    getKey = ohme.getKey,
    getVal = ohme.getVal,
    myObj = {test1: '555', test2: '777'};

describe('#getKey', function() {
  it('it returns obj key when valid value is passed', function() {
    getKey({test1: '555', test2: '777'}, '777').should.equal('test2');
  });

  it('it returns empty string when invalid value is passed', function() {
    getKey({test1: '555', test2: '777'}, '888').should.equal('');
  });
});

describe('#getVal', function() {
  it('it returns obj value when valid key is passed', function() {
    getVal(myObj, 'test1').should.equal('555');
  });

  it('it returns empty string when invalid key is passed', function() {
    getVal(myObj, '888').should.equal('');
  });
});
