import { RemoveNullPersonPipe } from './remove-null-person.pipe';

describe('RemoveNullPersonPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveNullPersonPipe();
    expect(pipe).toBeTruthy();
  });
});
