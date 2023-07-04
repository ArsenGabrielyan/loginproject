import './App.scss';
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignIn';
import Home from './components/Home';
import ProfilePage from './components/Profile';
import AdminService from './components/AdminService';
import AdminPages from './components/AdminPages';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={ <MainPage />} />
        <Route path='/signin' element={ <SignInPage />} />
        <Route path="/" element={<Home />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path="/service" element={<AdminService />} />
        <Route path='/pages' element={<AdminPages />} />
      </Routes>
    </div>
  );
}