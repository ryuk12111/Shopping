import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb; /* lighter border */
  background-color: rgba(255, 255, 255, 0.85); /* slight transparency */
  box-shadow: 0 4px 10px rgba(0,0,0,0.06); /* subtle shadow */
  opacity: 0.85;
  position: absolute;
  transition: opacity 0.3s ease, transform 0.3s ease;
  backdrop-filter: blur(2px); /* light blur */

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #1f2937; /* slightly darker */
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    color: #4b5563; /* slightly darker for better contrast */
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 260px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  margin: 10px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.04);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);

    ${BackgroundImage} {
      transform: scale(1.07);
    }

    ${Body} {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;
