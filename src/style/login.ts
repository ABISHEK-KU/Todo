import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 600px) {
    width: 90%;
    height: auto;
  }
`;

export const LoginMain = styled.main`
  width: 100%;
  height: 100%;
  padding: 32px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  justify-content: center;
  place-items: center;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const HelperText = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 20px;
  text-align: center;
`;