import styled from 'styled-components';

// Filter out the isLoading prop so it doesn't get passed to the <button> element
const filterProps = (prop) => prop !== 'isLoading';

export const BaseButton = styled.button.withConfig({
  shouldForwardProp: filterProps,
})`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  /* Visual feedback for loading state */
  opacity: ${({ isLoading }) => (isLoading ? 0.6 : 1)};
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'auto')};

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
