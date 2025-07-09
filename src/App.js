// App.js
import './App.css';
import AppRoutes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router> 
      <div className="App">
        <div className="main-container">
          <AppRoutes /> 
        </div>
      </div>
    </Router>
  );
}

export default App;
