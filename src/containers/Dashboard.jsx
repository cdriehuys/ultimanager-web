import React from 'react';

import AddTeamForm from '../components/AddTeamForm';
import TeamList from '../components/TeamList';


const Dashboard = () => (
  <div>
    <h1>UltiManager Dashboard</h1>
    <TeamList />

    <h2>Add Team</h2>
    <AddTeamForm />
  </div>
);


export default Dashboard;
