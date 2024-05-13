/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: 700;
`;

const StyledParagraph = styled.p`
  color: var(--gray-color);
  font-size: 1.5rem;
  padding-bottom: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  `;

export const HeadingComponent = () => {
  return (
    <StyledDiv>
      <StyledHeading>
      Hi, I'm David
      </StyledHeading>
      <StyledParagraph>Fullstack developer living in Sweden.</StyledParagraph>
    </StyledDiv>
  );
};
