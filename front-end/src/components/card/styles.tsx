import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function App() {
  return (
    <div className="App">
      <h1>Card component</h1>
      <h2>props: title, date, and img</h2>
      <CardContainer>
        
      </CardContainer>
    </div>
  );
}

export {CardContainer, Separator}