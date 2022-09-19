import './App.scss';
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignIn';
import DashboardUser from './components/BoardUser';
import DashboardMod from './components/BoardMod';
import DashboardAdmin from './components/BoardAdmin';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={ <MainPage />} />
        <Route path='/signin' element={ <SignInPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<DashboardUser/>}/>
        <Route path="mod" element={<DashboardMod/>}/>
        <Route path="admin" element={<DashboardAdmin/>}/>
      </Routes>
    </div>
  );
}

export default App;
