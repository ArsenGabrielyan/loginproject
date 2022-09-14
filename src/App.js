import './App.scss';
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="loginContainer">
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
