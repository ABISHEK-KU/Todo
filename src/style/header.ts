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

export const MenuandAppTitleContainer = styled.div`
  display: "flex";
  align-items: "center";
  gap: 12;
`;

export const AppTitle = styled.h1`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--foreground);
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 600px) {
    display: flex;
    margin-right: 8px;
  }
`;
