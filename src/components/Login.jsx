import { useState } from "react";

const Login = ({}) => {
  const [userInput, setUserInput] = useState("");

  const handleOnChange = (e) => {
    setUserInput(e.target.value);
    if (userInput.includes("o") || userInput.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const handleOnClick = () => {
    if (userInput.includes("o") || userInput.includes("O") || !userInput) {
      alert("Usuario invalido para registrarse");
    } else {
      alert("Usuario registrado correctamente!");
    }
  };

  return (
    <div className="m-2">
      <input
        type="text"
        onChange={handleOnChange}
        placeholder="Ingrese su username"
      />
      <button onClick={handleOnClick}>Registrarse</button>
      <p>{userInput}</p>
    </div>
  );
};

export default Login;
