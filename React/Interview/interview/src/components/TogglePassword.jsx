import React, { useState } from "react";

const TogglePassword = () => {
  const [isVisible, setIsVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <input
        type={isVisible ? "text" : "password"}
        placeholder="Enter your password"
      />

      <button onClick={togglePasswordVisibility}>
        {isVisible ? <p>Hide</p> : <p>Show</p>}
      </button>
    </div>
  );
};

export default TogglePassword;
