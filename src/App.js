import { useState } from 'react';
import UserContext from './context/UserContext';
import FormName from './components/formName/FormName';
import FormAge from './components/formAge/FormAge';
import Header from './components/header/Header';
import Age from './components/age/Age';
import FormImage from './components/formImage/FormImage';
import Image from './components/imagesubmit/Image';



function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const user = { name, setName, age, setAge, image, setImage };
  return (
    <UserContext.Provider value={user}>
      <Header />
      <FormName />
      <Age />
      <FormAge />
      <Image />
      <FormImage />
    </UserContext.Provider>
  );
}
export default App;
