import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
function Age() {
  const context = useContext(UserContext);
  return (
    <div>
      <h2>tu edad es {context.age || []} años.</h2>
    </div>
  );

}

export default Age;