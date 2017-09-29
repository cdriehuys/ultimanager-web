import PropTypes from 'prop-types';
import React from 'react';


const TeamList = ({ teams }) => (
  <div>
    <h2>Team List</h2>
    <ul>
      {teams.map(t => <li key={t.id}>{t.name}</li>)}
    </ul>
  </div>
);

TeamList.defaultProps = {
  teams: [],
};

TeamList.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};


export default TeamList;
