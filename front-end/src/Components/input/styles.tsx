import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: #575757;
  color: #FFFFFF;

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: #FFFFFF;
    background: transparent;
    border: 0;
    border-color: transparent;

    &:placeholder {
      color: transparent;
    }
  }
  > svg {
    margin-left: 16px;
  }
`