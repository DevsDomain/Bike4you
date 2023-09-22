import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { Routes } from './routes';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
<Routes></Routes>
  </React.StrictMode>
);

