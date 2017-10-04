import { ADD_TEAM } from '../../actions';

import { addTeam } from '../teams';


describe('Team Action Creators', () => {
  describe('addTeam', () => {
    it('should create an action to add a team', () => {
      const teamData = {
        id: 1,
        name: 'Foo',
      };

      const expected = {
        type: ADD_TEAM,
        payload: teamData,
      };

      expect(addTeam(teamData)).toEqual(expected);
    });
  });
});
