import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: header;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: var(--header-background);
  box-shadow: 0 2px 4px rgba(117, 117, 117, 0.1);

  @media (max-width: 600px) {
    padding: 0 16px;
    height: 50px;
  }
`;

export const AppTitle = styled.h1`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

export const IconGroup=styled.div`
display:flex;
justify-content: center;
align-items: center;
gap: 10px;
`