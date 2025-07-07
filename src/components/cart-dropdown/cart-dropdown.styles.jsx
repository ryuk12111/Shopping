import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 200px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin-bottom: 10px;
  color: #333;

  &:hover {
    color: red;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* scroll vertically when overflow */
`;
