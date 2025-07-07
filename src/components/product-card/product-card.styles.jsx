import styled from 'styled-components';
import Button from '../button/button.component';

export const ProductCardContainer = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0 10px 0;
`;

export const ProductName = styled.span`
  font-size: 1.15rem;
  font-weight: 600;
  color: #222;
`;

export const ProductPrice = styled.span`
  font-size: 1.05rem;
  font-weight: 500;
  color: #ff4d6d;
`;

export const AddButton = styled(Button)`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  background-color: #ff4d6d;
  color: #fff;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e03e5d;
  }
`;
