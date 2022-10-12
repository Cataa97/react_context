import { useRef } from 'react';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const FormAge = () => {
    const inputRef = useRef(null);
    const { setAge } = useContext(UserContext);

    function handleClick() {
        setAge(inputRef.current.value);
    }

    return (

        <div>
            <input
                ref={inputRef}
                type="number"
                id="age"
                name="age"
                placeholder="Age"
            />

            <button onClick={handleClick}>Enviar</button>
        </div>
    );
};

export default FormAge;