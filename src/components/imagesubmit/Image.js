import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
function Image() {
  const context = useContext(UserContext);
  return (
    <div>
      <img src={context.image || []} alt="hola" ></img>
    </div>
  );

}

export default Image;