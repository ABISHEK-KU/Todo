import styled from "styled-components";

export const ChartGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: var(--card);
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0 0 8px 0;
    font-size: 1rem;
  }

  .chartInner {
    width: 100%;
    height: 220px;
  }

  @media (max-width: 700px) {
    .chartInner {
      height: 160px;
    }
  }
`;

