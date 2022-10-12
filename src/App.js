import { useState } from 'react';
import UserContext from './context/UserContext';
import "./App.css";
import FormName from './components/formName/FormName';
import FormAge from './components/formAge/FormAge';
import Header from './components/header/Header';
import Age from './components/age/Age';
import Email from './components/email/Email';
import FormEmail from './components/formEmail/formEmail';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const user = { name, setName, age, setAge, email, setEmail };
  return (
    <UserContext.Provider value={user}>
      <Header />
      <FormName />
      <Age />
      <FormAge />
      <Email />
      <FormEmail />
    </UserContext.Provider>
  );
}

export default App;
