import styled from "styled-components";

export const SidebarContainer = styled.aside`
  grid-area: sidebar;
  width: 250px;
  height: 100%;
  background-color: var(--sidebar-background);
  box-shadow: 2px 0 4px rgba(117, 117, 117, 0.1);
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (max-width: 800px) {
    width: 200px;
    padding: 12px;
  }
`;

export const SidebarItem = styled.div`
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--sidebar-item-hover-background);
  }

  @media (max-width: 800px) {
    padding: 10px 14px;
    margin-bottom: 6px;
  }
`;
