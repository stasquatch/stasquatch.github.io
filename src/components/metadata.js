import React from 'react';
import styled from 'styled-components';

const MetadataWrapper = styled.p`
  font-size: 1.7rem;
  margin: 1rem 0;
  font-family: 'Nunito Sans';
  *:not(:first-child)::before {
    content: '–';
    padding: 10px;
  }
`;

const Metadata = ({ children }) => {
  return (
    <MetadataWrapper>
      {children}
    </MetadataWrapper>
  )
}

export default Metadata;