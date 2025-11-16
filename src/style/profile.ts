import styled from "styled-components";

export const ProfileContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`

export const ProfilePic=styled.img`
width: 100px;
height: 100px;
border-radius: 100%;
object-fit: cover;`

export const ProfileDisplayGrid = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;
  justify-self: start;
`

export const ProfileField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`

export const ProfileLabel = styled.label`
  font-weight: 600;
  color:var(--text-primary);
  font-size: 14px;
`

export const ProfileValue = styled.p`
  color:var(--text-primary);
  font-size: 14px;
  margin: 0;
  padding: 8px;
  border-radius: 4px;
`

