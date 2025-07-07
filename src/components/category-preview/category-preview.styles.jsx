import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  margin: 40px 0;
  padding: 0 20px;
`;

export const CategoryHeader = styled.h2`
  margin-bottom: 20px;
  text-align: left;
`;

export const TitleLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: #ff4d6d;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #e03e5d;
  }

  &::after {
    content: '→';
    margin-left: 8px;
    font-size: 1.2rem;
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    transform: translateX(-5px);
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;
