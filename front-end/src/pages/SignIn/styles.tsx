import styled from 'styled-components'
import backgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: 2F2F2F;
  flex-direction: row-reverse;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: FFFFFF;
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }
  > p {
    font-size: 17px;
    color: gray;
  }

  > a {
    margin-top: 124px;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: opacity(0.7);
`