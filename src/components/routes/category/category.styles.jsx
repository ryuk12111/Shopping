import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff4d6d;
  margin: 40px 20px 20px;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  padding: 0 20px 40px;
  justify-items: center;
`;
