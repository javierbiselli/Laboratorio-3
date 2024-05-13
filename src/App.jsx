import { useState } from "react";
import "./App.css";
import Lista from "./components/Lista/Lista";
import AgregarItem from "./components/AgregarItem/AgregarItem";

function App() {
  const [lista, setLista] = useState([
    { tarea: "test tarea", id: 1, completada: false },
    { tarea: "test tarea123123", id: 2, completada: true },
  ]);

  return (
    <div className="p-4">
      <Lista lista={lista} setLista={setLista} />
      <AgregarItem lista={lista} setLista={setLista} />
    </div>
  );
}

export default App;
