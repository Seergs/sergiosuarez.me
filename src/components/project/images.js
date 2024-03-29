import React from 'react';
import styled, { css } from 'styled-components/macro';
import Image from 'gatsby-image';
import generateAltTexts from '../../utils/generateAltTexts';
import { mediaQueries } from '../../theme/breakpoints';

const ImagesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr 2fr;
  margin: 4rem 0;

  ${(props) => props.isTwoRows
    && css`
      grid-template-rows: 3fr 1fr;
    `}

  ${mediaQueries('lg')`
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  `}
`;

const ImageWrapper = styled.div`
  &:nth-child(1) {
    grid-column: 1 / 3;
  }
  &:nth-child(2) {
    grid-column: 1 / 2;
  }
  &:nth-child(4) {
    grid-column: 1 / 3;
  }
`;

export default function Images({ images, projectName }) {
  const sortedImages = images.sort((a, b) => a.originalName > b.originalName);
  // eslint-disable-next-line no-console
  console.log({ projectName, sortedImages });
  const altTexts = generateAltTexts(images);
  return (
    <ImagesContainer isTwoRows={projectName === 'chatify'}>
      {sortedImages.map((image) => (
        <ImageWrapper key={image.originalName}>
          <Image fluid={image} alt={altTexts[projectName]} />
        </ImageWrapper>
      ))}
    </ImagesContainer>
  );
}
