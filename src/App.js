import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/mainPage'
import GuitarPage from './components/pages/guitarPage';
import KeyboardPage from './components/pages/keyboardPage';
import DrumsPage from './components/pages/drumsPage';
import Violin from './components/pages/violinPage';
import FlutePage from './components/pages/flutePage';
import DjPage from './components/pages/djPage';
import SaxPage from './components/pages/saxPage';
import ClarinetPage from './components/pages/clarinets';

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

          {/* Violin Page */}
          <Route path="/ViolinPage" element={<Violin></Violin>} />

          {/* Flute Page */}
          <Route path="/FlutePage" element={<FlutePage></FlutePage>} />

          {/* DJ Page */}
          <Route path="/DjPage" element={<DjPage></DjPage>} />

          {/* Sax Page */}
          <Route path="/saxPage" element={<SaxPage></SaxPage>} />

          {/* Clarinet Page */}
          <Route path="/clarinetPage" element={<ClarinetPage></ClarinetPage>} />

        </Routes>
    </Router>
    </div>
  );
}

export default App;
