import { SquareNumberPipe } from './square-number.pipe';

describe('SquareNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new SquareNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
