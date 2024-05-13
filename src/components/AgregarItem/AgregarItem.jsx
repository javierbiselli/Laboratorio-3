import { useState } from "react";

const AgregarItem = ({ lista, setLista }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const handleChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  const handleClick = () => {
    if (nuevaTarea) {
      const newItem = { id: Math.random(), tarea: nuevaTarea };
      setLista([...lista, newItem]);
      setNuevaTarea("");
    }
  };

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-between align-items-center my-3">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Enter a new task"
          onChange={handleChange}
          value={nuevaTarea}
        />
        <button className="btn btn-primary" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AgregarItem;
