import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';


export const TeamDetail = ({ team }) => (
  <h1>{team.name}</h1>
);

TeamDetail.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};


export const mapStateToProps = (state, ownProps) => ({
  team: state.teams.byId[ownProps.match.params.id],
});


export default connect(mapStateToProps)(TeamDetail);
