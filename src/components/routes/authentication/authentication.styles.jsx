import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 36px;
    padding: 40px 16px;
  }
`;
