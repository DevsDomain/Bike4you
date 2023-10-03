import styled from 'styled-components'


export const Container = styled.div`
  height: 100vh;
  width: 50vw;
  margin: auto;

  align-items: center;
  background-color: 2F2F2F;

`

export const Form = styled.form`


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;



`
export const Input = styled.input`

    height: 30px;
    width: 70%;
    margin-top: 12px;
    padding: 12px;

    color: #FFFFFF;
    background: #121257;
    border: 0;
    border-color: transparent;

    &:placeholder {
      color: transparent;
    }
`
