import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { MainPage,SignInPage,Home,ProfilePage,AdminPages,AdminService } from './data/pages';

export default function App() {
  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path='/signup' element={ <MainPage />} />
          <Route path='/signin' element={ <SignInPage />} />
          <Route path="/" element={<Home />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path="/service" element={<AdminService />} />
          <Route path='/pages' element={<AdminPages />} />
        </Routes>
      </Suspense>
    </div>
  );
}