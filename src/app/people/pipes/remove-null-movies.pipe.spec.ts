import { RemoveNullMoviesPipe } from './remove-null-movies.pipe';

describe('RemoveNullMoviesPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveNullMoviesPipe();
    expect(pipe).toBeTruthy();
  });
});
