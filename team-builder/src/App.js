import React, { useState } from 'react';
import MemberForm from './components/MemberForm';
import MemberCard from './components/MemberCard';
import EditMember from './components/EditMember';
import FilterMember from './components/FilterMembers';
import OgMembersData from './OgMembersData';

import './App.css';

function App() {

  const [members, setMembers] = useState(OgMembersData);
    console.log(members);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zbigniew Lewicki Book Publishing and Art Show</h1>
        <div className="member-list">
          <ul>
            {members.map((member) => 
            <li key={member.id}>{member.name}<br />{member.email}<br />{member.role}</li>)}
          </ul>
        </div>

      </header>
    </div>
  );
}

export default App;

