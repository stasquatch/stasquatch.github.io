import React from 'react';
import styled from 'styled-components';
import Blob from "./blob";
import { useCurrentWidth, useCurrentHeight } from '../hooks/useCurrentWidth';

const largeBlobSize = 100; // in px
const tinyBlobSize = 30; // in px
const globalOffset = 10; // in px

function blobCount(width, height, size, spacing = 0) {
  let containerLength = width > 768 ? height : width;
  return Math.floor((containerLength) / (size + spacing + globalOffset));
}

const TerrazzoWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  @media (min-width: ${props => props.breakpoints.tablet}px) {
    flex-direction: column;
    padding: 0 0 0 ${globalOffset}px;
    margin: 0 ${tinyBlobSize}px 0 0;
  }
  @media (max-width: ${props => props.breakpoints.tablet - 1}px) {
    flex-direction: row;
    padding: ${globalOffset}px 0 0 0;
    margin: 0 0 ${tinyBlobSize}px 0;
  }
`;

const BlobLine = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${props => props.breakpoints.tablet}px) {
    flex-direction: column;
    height: 100%;
    left: ${props => props.offset + globalOffset}px;
  }
  @media (max-width: ${props => props.breakpoints.tablet - 1}px) {
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

const terrazzo = (props) => {
  let width = useCurrentWidth();
  let height = useCurrentHeight();

  let numberOfBlobs = blobCount(width, height, largeBlobSize);

  return (
    <>
      <TerrazzoWrapper breakpoints={props.breakpoints}>
        {renderBlobs(largeBlobSize, numberOfBlobs, 'large')}
        <BlobLine offset={0} breakpoints={props.breakpoints}>
          {renderBlobs(tinyBlobSize, numberOfBlobs + 1, 'tiny-1')}
        </BlobLine>
        <BlobLine offset={largeBlobSize - globalOffset} breakpoints={props.breakpoints}>
          {renderBlobs(tinyBlobSize, numberOfBlobs + 1, 'tiny-2')}
        </BlobLine>
        <BlobLine offset={(largeBlobSize - globalOffset) / 2} breakpoints={props.breakpoints}>
          {renderBlobs(tinyBlobSize, numberOfBlobs + 1, 'tiny-3')}
        </BlobLine>
      </TerrazzoWrapper>
    </>
  );
};

export default terrazzo;