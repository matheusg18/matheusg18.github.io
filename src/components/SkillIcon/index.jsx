import React from 'react';
import PropTypes from 'prop-types';
import SkillIconContainer from './SkillIcon.styles';

function SkillIcon({ skillName = '' }) {
  const path = `icons/${skillName.toLowerCase().replace(/ /g, '-')}.png`;

  return (
    <SkillIconContainer>
      <img src={path} alt={skillName} />
      <span>{skillName}</span>
    </SkillIconContainer>
  );
}

SkillIcon.propTypes = {
  skillName: PropTypes.string.isRequired,
};

export default SkillIcon;
