import { Container } from './styles';
import { FcGoogle } from 'react-icons/fc'



export function ButtonUser({ title, loading,...rest } ) {

  return (
    <Container
      type="button"
      disabled={loading}
      onClick={rest.onClick}
      onSubmit={rest.onSubmit}
      google={rest.google}
    >
      {rest.google && <FcGoogle style={{ width: '35px', height: '35px' }} />}




      {loading ? 'Carregando...' : title}
    </Container>
  );
}