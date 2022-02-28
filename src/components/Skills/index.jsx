import React from 'react';
import SkillIcon from '../SkillIcon';

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
    <section>
      <h2>Skills</h2>
      <div>
        {skillsList.map((skill) => (
          <SkillIcon key={skill} skillName={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
