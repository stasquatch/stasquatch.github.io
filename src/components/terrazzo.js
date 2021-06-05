import React, { Component } from 'react';
import styled from 'styled-components';
import Blob from './blob';
import debounce from 'debounce';

const largeBlobSize = 100; // in px
const tinyBlobSize = 30; // in px
const globalOffset = 10; // in px

function blobCount(width, height, size, spacing = 0) {
  let containerLength = width > 768 ? height : width;
  return Math.floor(containerLength / (size + spacing + globalOffset));
}

const TerrazzoWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  @media (min-width: ${props => props.breakpoints.tablet}px) {
    flex-direction: column;
    padding: 0 0 0 ${globalOffset}px;
    margin: 0 ${tinyBlobSize}px 0 0;
    min-width: 115px;
  }
  @media (max-width: ${props => props.breakpoints.tablet - 1}px) {
    flex-direction: row;
    padding: ${globalOffset}px 0 0 0;
    margin: 0 0 ${tinyBlobSize}px 0;
    min-height: 115px;
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

class Terrazzo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      numberOfBlobs: 0,
    };
  }

  componentDidMount() {
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    this.setState({
      width,
      height,
      numberOfBlobs: blobCount(width, height, largeBlobSize),
    });

    window.addEventListener('resize', debounce(this.resizeListener, 200));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
    this.setState = () => {
      return;
    };
  }

  resizeListener = () => {
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    let currentBlobCount = blobCount(width, height, largeBlobSize);

    // if there's no change, return early
    if (currentBlobCount === this.state.numberOfBlobs) return;

    this.setState({
      width,
      height,
      numberOfBlobs: blobCount,
    });
  };

  render() {
    return (
      <>
        <TerrazzoWrapper breakpoints={this.props.breakpoints}>
          {renderBlobs(largeBlobSize, this.state.numberOfBlobs, 'large')}
          <BlobLine offset={0} breakpoints={this.props.breakpoints}>
            {renderBlobs(tinyBlobSize, this.state.numberOfBlobs + 1, 'tiny-1')}
          </BlobLine>
          <BlobLine
            offset={largeBlobSize - globalOffset}
            breakpoints={this.props.breakpoints}
          >
            {renderBlobs(tinyBlobSize, this.state.numberOfBlobs + 1, 'tiny-2')}
          </BlobLine>
          <BlobLine
            offset={(largeBlobSize - globalOffset) / 2}
            breakpoints={this.props.breakpoints}
          >
            {renderBlobs(tinyBlobSize, this.state.numberOfBlobs + 1, 'tiny-3')}
          </BlobLine>
        </TerrazzoWrapper>
      </>
    );
  }
}

export default Terrazzo;
