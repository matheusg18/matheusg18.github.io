import React from 'react';
import PropTypes from 'prop-types';

function SkillIcon({ skillName = '' }) {
  const path = `icons/${skillName.toLowerCase().replace(/ /g, '-')}.png`;

  return (
    <div>
      <img src={path} alt={skillName} />
      <span>{skillName}</span>
    </div>
  );
}

SkillIcon.propTypes = {
  skillName: PropTypes.string.isRequired,
};

export default SkillIcon;
