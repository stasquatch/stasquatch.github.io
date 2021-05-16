import React from 'react';
import styled from 'styled-components';

const SkillsListWrapper = styled.ul`
  columns: 200px 3;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SkillsList = ({ skills }) => {
  return (
    <p>
      <SkillsListWrapper>
        {skills.map((skill, index) => <SkillItem key={index}>{skill}</SkillItem>)}
      </SkillsListWrapper>
    </p>
  )
}

export default SkillsList;