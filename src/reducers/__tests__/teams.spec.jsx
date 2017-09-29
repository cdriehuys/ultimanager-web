import teams from '../teams';


describe('teams reducer', () => {
  it('should have an initial state if none is provided', () => {
    const expected = { byId: {} };

    expect(teams()).toEqual(expected);
  });
});
