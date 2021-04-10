import React from 'react';
import styled from 'styled-components';
import Blob from "./blob";
import { useCurrentWidth, useCurrentHeight } from '../hooks/useCurrentWidth';

const largeBlobSize = 100; // in px
const tinyBlobSize = 20; // in px
const globalOffset = 10; // in px

function blobCount(width, height, size, spacing = 0) {
  let containerLength = width > 768 ? height : width;
  return Math.floor((containerLength) / (size + spacing + globalOffset));
}

const TerrazzoWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  @media (min-width: 769px) {
    flex-direction: column;
    padding: 0 0 0 ${globalOffset}px;
    margin: 0 ${tinyBlobSize}px 0 0;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    padding: ${globalOffset}px 0 0 0;
    margin: 0 0 ${tinyBlobSize}px 0;
  }
`;

const TinyBlobs = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  @media (min-width: 769px) {
    flex-direction: column;
    height: 100%;
    left: ${props => props.offset + globalOffset}px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    top: ${props => props.offset + globalOffset}px;
  }
`;

function renderBlobs(size, count, idPrefix) {
  let blobs = [];
  for (let i = 0; i < count; i++) {
    blobs.push(<Blob key={`${idPrefix}-${i}`} size={size} />);
  }
  return blobs;
}

const terrazzo = () => {
  let width = useCurrentWidth();
  let height = useCurrentHeight();

  let numberOfBlobs = blobCount(width, height, largeBlobSize);

  return (
    <>
      <TerrazzoWrapper>
        {renderBlobs(largeBlobSize, numberOfBlobs, 'large')}
        <TinyBlobs offset={0}>
          {renderBlobs(tinyBlobSize, numberOfBlobs + 1, 'tiny-1')}
        </TinyBlobs>
        <TinyBlobs offset={largeBlobSize - globalOffset}>
          {renderBlobs(tinyBlobSize, numberOfBlobs + 1, 'tiny-2')}
        </TinyBlobs>
        <TinyBlobs offset={(largeBlobSize - globalOffset) / 2}>
          {renderBlobs(tinyBlobSize, numberOfBlobs + 1, 'tiny-3')}
        </TinyBlobs>
      </TerrazzoWrapper>
    </>
  );
};

export default terrazzo;