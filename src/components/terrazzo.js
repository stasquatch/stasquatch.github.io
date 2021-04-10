import React from 'react';
import styled from 'styled-components';
import Blob from "./blob";
import { useCurrentWidth, useCurrentHeight } from '../hooks/useCurrentWidth';

const largeBlobSize = 100; // in px

function blobCount(width, height) {
  let containerLength = width > 768 ? height : width;
  return Math.floor(containerLength / largeBlobSize);
}

const TerrazzoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const terrazzo = () => {
  let width = useCurrentWidth();
  let height = useCurrentHeight();
  let blobs = [];
  for (let i = 0; i < blobCount(width, height); i++) {
    blobs.push(<Blob key={i} size={largeBlobSize} />)
  }

  return (
    <TerrazzoWrapper>
      {blobs}
    </TerrazzoWrapper>
  );
};

export default terrazzo;