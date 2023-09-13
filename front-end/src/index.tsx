import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Components/Navbar';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <Navbar />
    <App />
  </div>
);

