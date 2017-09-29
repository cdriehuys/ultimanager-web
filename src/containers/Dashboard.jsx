import React from 'react';

import TeamList from '../components/TeamList';


const teams = [
  { id: 1, name: 'Darkside' },
  { id: 2, name: 'Raleigh Flyers' },
];


const Dashboard = () => (
  <div>
    <h1>UltiManager Dashboard</h1>
    <TeamList teams={teams} />
  </div>
);


export default Dashboard;
