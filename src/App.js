import { useState } from 'react';
import UserContext from './context/UserContext';
import InputName from './components/nombre/Index';


function App() {
  const [user, setName] = useState("");
  const value = { user, setName };
  return (
    <UserContext.Provider value={value}>
      <InputName />
    </UserContext.Provider>
  );
}
export default App;
