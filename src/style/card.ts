import styled from "styled-components";

// Card Components
export const Card = styled.div`
  width: var(--card-width, 100%);
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-items: start;
  gap: 8px;
  padding: 0 24px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

export const CardContent = styled.div`
  padding: 0 24px;
`;
