import styled from 'styled-components'

interface ContainerProps {
    isactive: string;
  }

export const Container = styled.button<ContainerProps>`
  background: none;
  color: ${({ isactive }) =>
        isactive === 'true' ? '#ffffff' : '#5ca2be'};

  border: none;
  font-size: 21px;
`