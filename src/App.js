import { useState } from 'react';
import InputName from './components/nombre/Index';
import UserContext from './components/context/UserContext';
import './App.css';

function App() {

  const [user, setName] = useState("");
  const value = {user, setName };
  

  return (
    <UserContext.Provider value={value}>
      <InputName />
    </UserContext.Provider>



  );
}

export default App;
