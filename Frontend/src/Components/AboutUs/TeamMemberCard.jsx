// TeamMemberCard.js

import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ name, position, image, description }) => {
  return (
    <div className="team-member-card">
      <img src={image} alt={`${name}'s Avatar`} className="avatar" />
      <h3>{name}</h3>
           <p className="description">{description}</p>
    </div>
  );
};

export default TeamMemberCard;
