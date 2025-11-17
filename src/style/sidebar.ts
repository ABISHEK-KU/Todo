import styled from "styled-components";

export const SidebarContainer = styled.aside<{ $open?: boolean }>`
  grid-area: sidebar;
  width: 250px;
  height: 100%;
  background-color: var(--background);
  box-shadow: 2px 0 4px rgba(117, 117, 117, 0.1);
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (max-width: 800px) {
    width: 200px;
    padding: 12px;
  }

  @media (max-width: 600px) {
    position: fixed;
    top: 50px; 
    left: 0;
    height: calc(100% - 50px);
    width: 250px;
    max-width: 80%;
    transform: translateX(${(props) => (props.$open ? "0" : "-100%")});
    transition: transform 220ms ease-in-out;
    z-index: 1200;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
    -webkit-overflow-scrolling: touch;
  }
`;

export const SidebarItem = styled.div<{ $active?: boolean }>`
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) =>
    props.$active &&
    `
  color:var(--text-secondary);
  background-color: var(--foreground);
  `}

  &:hover {
    color: var(--text-secondary);
    background-color: var(--foreground);
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    padding: 10px 14px;
    margin-bottom: 6px;
  }
`;
