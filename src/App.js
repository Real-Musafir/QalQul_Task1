import logo from './logo.svg';
import './App.css';
import UserDetails from './component/UserDetails';
import { useState } from 'react';

function App() {
  const [userId, setUserId] = useState(1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Update userId state directly with input value
    setUserId(value);
  };

  return (
    <div className="App">
       <h1>Advanced React Component with Custom Hook</h1>
      <input 
        type="text" 
        value={userId} 
        onChange={handleInputChange} 
        placeholder="Enter user ID" 
      />
      {userId && !isNaN(userId) && <UserDetails userId={Number(userId)} />}
    </div>
  );
}

export default App;
