import fibonacci from '../fibonacci.js';
import chai from 'chai';

chai.should();

describe('fibonacci function teset', () => {

  it('fib(0) should be equal 0', () => {
    const actual = fibonacci(0);
    actual.should.be.eql(0);
  });
  
  it('fib(1) should be equal 1', () => {
    const actual = fibonacci(1);
    actual.should.be.eql(1);
  });

  it('fib(n) should be equal sum of fib(n-1) and fib(n-2)', () => {
    fibonacci(3).should.be.eql(fibonacci(1)+fibonacci(2));
  });
});
