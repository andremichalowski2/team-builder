import React from 'react';

const MemberCard = props => {

  // console.log(props.members.name);
  return(
    <div className="member-list">
      {props.members.map(member => {
        return (
          <ul>
            <div className="member" key={props.members.id}>
              <li>
                <p>{member.name}</p>
                <p>{member.email}</p>
                <p>{member.role}</p> 
              </li>
            </div>
          </ul>
        )
      })}
    </div>
  );
}

export default MemberCard;