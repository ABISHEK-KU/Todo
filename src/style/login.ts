import styled from "styled-components";

export const LoginFormContainer = styled.div`
  width: 500px;
  height: 200px;
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

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 36px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: var(--primary);
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
