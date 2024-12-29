import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { Login } from './pages/Login';
import { SingUp } from './pages/SingnUp';
import { MainPage } from './pages/MainPage';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/login' element={<Login /> } />
          <Route path='/sign-up' element={<SingUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
