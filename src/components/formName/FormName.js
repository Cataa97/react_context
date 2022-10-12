import { useRef } from 'react';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const FormName = () => {
  const inputRef = useRef(null);
  const { setName } = useContext(UserContext);

  function handleClick() {
    setName(inputRef.current.value);
  }

  return (

    <div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
        placeholder="Name"
      />

      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default FormName;