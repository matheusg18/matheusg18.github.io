import React from 'react';
import SkillIcon from '../SkillIcon';
import { SkillIconsWrapper, SkillsOverflowContainer, SkillsWrapper } from './Skills.styles';

function Skills() {
  const skillsList = [
    'HTML',
    'CSS',
    'JavaScript',
    'Jest',
    'React',
    'React Testing Library',
    'Redux',
    'SASS',
    'Styled Components',
    'NodeJS',
    'MySQL',
    'Docker',
    'Git',
    'Linux',
  ];

  return (
    <SkillsWrapper id="skills">
      <h2>Skills</h2>
      <SkillsOverflowContainer>
        <SkillIconsWrapper>
          {skillsList.map((skill) => (
            <SkillIcon key={skill} skillName={skill} />
          ))}
        </SkillIconsWrapper>
      </SkillsOverflowContainer>
    </SkillsWrapper>
  );
}

export default Skills;
