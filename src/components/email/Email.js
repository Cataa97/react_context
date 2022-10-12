import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
function Email() {
  const context = useContext(UserContext);
  return (
    <div>
      <h2>tu email es: {context.email || []} </h2>
    </div>
  );

}

export default Email;