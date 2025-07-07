import styled from 'styled-components';

// Filter out the isLoading prop so it doesn't get passed to the <button> element
const filterProps = (prop) => prop !== 'isLoading';

export const BaseButton = styled.button.withConfig({
  shouldForwardProp: filterProps,
})`
  min-width: 165px;
  height: 50px;
  padding: 0 35px;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 50px;
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff4d6d;
  color: white;
  transition: all 0.3s ease;

  /* Loading state feedback */
  opacity: ${({ isLoading }) => (isLoading ? 0.6 : 1)};
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'auto')};

  &:hover {
    background-color: #e03e5d;
    color: white;
    box-shadow: 0 4px 15px rgba(255, 77, 109, 0.6);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    box-shadow: 0 4px 15px rgba(66, 133, 244, 0.6);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #ff4d6d;
  border: 2px solid #ff4d6d;

  &:hover {
    background-color: #ff4d6d;
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba(255, 77, 109, 0.6);
  }
`;
