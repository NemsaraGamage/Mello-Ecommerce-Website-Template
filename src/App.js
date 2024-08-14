import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/mainPage'
import GuitarPage from './components/pages/guitarPage';
import KeyboardPage from './components/pages/keyboardPage';
import DrumsPage from './components/pages/drumsPage';

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

          {/* Guitar Page */}
          <Route path="/GuitarPage" element={<GuitarPage></GuitarPage>} />

          {/* Keyboard Page */}
          <Route path="/KeyboardPage" element={<KeyboardPage></KeyboardPage>} />

          {/* Drums Page */}
          <Route path="/DrumsPage" element={<DrumsPage></DrumsPage>} />
        
        
        </Routes>
    </Router>
    </div>
  );
}

export default App;
