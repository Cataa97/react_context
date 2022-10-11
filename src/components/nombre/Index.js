import UserContext from "../../context/UserContext";
import { useContext } from "react";

const InputName = () => {
  const { user, setName } = useContext(UserContext);
  return (
    <div>
      <h1>Hola {user}, bienvenido a tu perfil!</h1>
      <h2>Ten un buen día! {user}</h2>
      <label>Tu nombre:</label><br />
      <input type='text' onChange={e => setName(e.target.value)} />
      <h4>Gracias por usar use context {user} vuelve pronto!!!!</h4>
    </div>

  );
}

export default InputName;