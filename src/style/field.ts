import styled from "styled-components";

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FieldLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  height: 36px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--input);
  border-radius: 6px;
  background-color: transparent;
  color: var(--foreground);
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: var(--ring);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &::placeholder {
    color: var(--muted-foreground);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
