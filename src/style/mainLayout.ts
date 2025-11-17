import styled from "styled-components";

export const MainLayout = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 250px auto;
  grid-template-areas:
    "header header"
    "sidebar content";
  height: 100vh;

  @media (max-width: 800px) {
    grid-template-columns: 200px auto;
  }

  @media (max-width: 600px) {
    grid-template-rows: 50px auto;
    grid-template-columns: auto;
    grid-template-areas:
      "header"
      "sidebar"
      "content";
  }
`;

export const ContentArea = styled.main`
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 50px;
  height: 100%;
  position: relative;
  @media (max-width: 600px) {
    padding: 12px;
  }
`;

export const Overlay = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    position: fixed;
    inset: 50px 0 0 0;
    background: rgba(0, 0, 0, 0.32);
    z-index: 1100;
  }
`;
