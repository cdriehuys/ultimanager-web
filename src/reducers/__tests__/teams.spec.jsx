import { addTeam } from '../../actionCreators';

import teamsReducer, { teamsByIdReducer } from '../teams';


describe('Teams Reducer', () => {
  it('should have an initial state composed from its child reducers', () => {
    const expected = {
      byId: teamsByIdReducer(),
    };

    expect(teamsReducer()).toEqual(expected);
  });

  describe('teamsByIdReducer', () => {
    it('should have an initial state if none is provided', () => {
      expect(teamsByIdReducer()).toEqual({});
    });

    it('should handle the ADD_TEAM action', () => {
      const team = { id: 1, name: 'Foo' };
      const action = addTeam(team);

      const initialState = teamsByIdReducer();

      const expected = {
        ...initialState,
        [team.id]: team,
      };

      expect(teamsByIdReducer(initialState, action)).toEqual(expected);
    });
  });
});
