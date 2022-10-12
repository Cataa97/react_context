import { useRef } from 'react';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const Image = () => {
    const inputRef = useRef(null);
    const { setImage } = useContext(UserContext);

    function handleClick() {
        setImage(inputRef.current.value);
    }

    return (

        <div>
            <input
                ref={inputRef}
                type="file"
                id="photo"
                name="photo"
                alt="image"
                
            />

            <button onClick={handleClick}>Enviar</button>
        </div>
    );
};

export default Image;