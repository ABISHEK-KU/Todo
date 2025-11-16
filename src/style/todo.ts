import styled from "styled-components";

export const TodoContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:20px;`

export const InputGroupContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:10px;
margin-top:50px ;
`

export const TableContainer=styled.table`
  margin-top: 50px;
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  background-color: var(--background);
  border: 2px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const TableHead=styled.thead`
  background-color: var(--primary);
  color: white;

`

export const TableHeadRow=styled.tr`
  &:hover {
    background-color: transparent;
  }
`

export const TableHeaderCell=styled.th`
  padding: 15px;
  text-align: left;
  font-weight: 600;
`

export const TableBody=styled.tbody`
  border:3px solid var(--border);
  &:hover tr {
    background-color: var(--hover);
  }
`

export const TableRow=styled.tr`
  border-bottom: 1px solid var(--border);
  transition: background-color 0.2s;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--hover);
  }
`

export const TableCell=styled.td`
  padding: 15px;
`

export const TableActionCell=styled.td`
  padding: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`

export const StatusBadge=styled.span<{ $status: string }>`
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  
  background-color: ${props => {
    switch(props.$status) {
      case 'Completed':
        return '#d4edda';
      case 'OnProgress':
        return '#fff3cd';
      case 'Pending':
        return '#f8d7da';
      default:
        return '#e2e3e5';
    }
  }};
  
  color: ${props => {
    switch(props.$status) {
      case 'Completed':
        return '#155724';
      case 'OnProgress':
        return '#856404';
      case 'Pending':
        return '#721c24';
      default:
        return '#383d41';
    }
  }};
`

export const TodoDialogContainer=styled.div`
  position: absolute;
  z-index: 10;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex-grow:1;
  background-color: var(--background);
  border: 1px solid var(--border);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding:10px;
`

export const DialogHeader=styled.div`
  width: 100%;
  height:60px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0 20px;`

export const DialogContent=styled.div`
  width: 100%;
  height:calc(100%-60px);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding: 0 20px;`