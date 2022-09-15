import './App.scss';
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <MainPage />} />
        <Route path='/signin' element={ <SignInPage />} />
      </Routes>
     
    </div>
    
  );
}

export default App;
