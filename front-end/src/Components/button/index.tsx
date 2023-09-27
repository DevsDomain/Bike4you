import { Container } from './styles';



export function Button({ title, loading,onClick}) {
  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
      
    >




      {loading ? 'Carregando...' : title}
    </Container>
  );
}