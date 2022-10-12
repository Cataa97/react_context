import { useRef } from 'react';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const FormEmail = () => {
    const inputRef = useRef(null);
    const { setEmail } = useContext(UserContext);

    function handleClick() {
        setEmail(inputRef.current.value);
    }

    return (

        <div>
            <input
                ref={inputRef}
                type="email"
                id="email"
                name="email"
                placeholder="email"
            />

            <button onClick={handleClick}>Enviar</button>
        </div>
    );
};

export default FormEmail;