import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';



=======
import GlobalStyles from './styles/global';
import { Routes } from './routes';
import reportWebVitals from './reportWebVitals';
>>>>>>> main
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<<<<<<< HEAD
  <div>
    <App />
  </div>
=======
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
<Routes></Routes>
  </React.StrictMode>
>>>>>>> main
);

