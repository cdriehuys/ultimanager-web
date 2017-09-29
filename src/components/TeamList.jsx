import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';


export const TeamList = ({ teams }) => (
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


export const mapStateToProps = state => ({
  teams: Object.values(state.teams.byId),
});


export default connect(mapStateToProps)(TeamList);
