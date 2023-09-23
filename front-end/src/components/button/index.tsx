import { Container } from './styles';
import{FcGoogle} from 'react-icons/fc'



export function Button({ title, loading,onClick, google}) {
  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
      google={google}
      >
      {google && <FcGoogle style={{width:'35px', height:'35px'}} />} 




      {loading ? 'Carregando...' : title}
    </Container>
  );
}