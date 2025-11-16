import styled from "styled-components"


export const Button = styled.button<{$varient?:string}>`
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
    background-color:var(--primary);
    opacity: 0.5;
  }

  ${props => props.$varient && `
  background-color:${props.$varient==="destroy"?"var(--destructive)":"var(--primary)"};
  &:hover {
    background-color:${props.$varient==="destroy"?"var(--destructive)":"var(--primary)"};
    opacity: 0.5;
  }
  `}
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
`

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  
  &:hover {
    color: #333;
  }
`