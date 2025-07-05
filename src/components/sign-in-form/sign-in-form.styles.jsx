import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;

  h2 {
    font-size: 24px;
    margin-bottom: 8px;
    color: #333;
  }

  span {
    font-size: 14px;
    margin-bottom: 20px;
    color: #777;
  }

  form {
    width: 100%;
  }

  button {
    margin-top: 12px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;

    button {
      flex: 1;
    }
  }
`;
