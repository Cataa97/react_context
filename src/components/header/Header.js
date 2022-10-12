import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
function Header() {
  const context = useContext(UserContext);
  return (
    <div>
      <h2>Hola: {context.name || []}</h2>

    </div>
  );

}

export default Header;


