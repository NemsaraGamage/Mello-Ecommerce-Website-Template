import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/mainPage'

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          {/* Mainpage routes */}
          <Route index element={<MainPage />} />
          <Route path='/Mello-Ecommerce-Website-Template/' element={<MainPage />} />

          {/* Main Page */}
          <Route path="/MainPage" element={<MainPage></MainPage>} />
        
        </Routes>
    </Router>
    </div>
  );
}

export default App;
