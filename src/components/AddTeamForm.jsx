import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { addTeam } from '../actionCreators';


export class AddTeamForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: '',
    };

    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(e) {
    this.setState({
      id: parseInt(e.target.value, 10),
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          id="id"
          name="id"
          onChange={this.handleIdChange}
          pattern="[0-9]+"
          required
        />
        <br />

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          onChange={this.handleNameChange}
          required
        />
        <br />

        <button type="submit">Add Team</button>
      </form>
    );
  }
}

AddTeamForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export const mapDispatchToProps = dispatch => ({
  onSubmit: team => dispatch(addTeam(team)),
});


export default connect(null, mapDispatchToProps)(AddTeamForm);
