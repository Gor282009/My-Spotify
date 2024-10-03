import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login';

function App() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const token = hash.substring(1).split("&")[0].split('=')[1]
      console.log(token);
    }
  })
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
