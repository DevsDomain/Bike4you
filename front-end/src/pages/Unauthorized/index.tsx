import { Container, Form, Background } from "./styles";
export default function Unauthorized() {
  
    return (
        <Container>
            <Form>
                <h1>Bikes4You</h1>
                <p>Aplicação para aluguel de Bikes</p>

                <h2>Ops, Você não tem acesso a esse conteúdo</h2>
      
                <h4>Apenas usuários autenticados</h4>
                               
            </Form>

            <Background />

        </Container>
    )
}