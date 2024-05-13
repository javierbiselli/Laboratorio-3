const Item = ({ lista, tarea, setLista }) => {
  const handleClickDelete = () => {
    setLista(lista.filter((item) => item.id != tarea.id));
  };

  const handleClickDone = () => {
    const tareaACompletar = lista.find((item) => item.id == tarea.id);

    tareaACompletar.completada = true;

    setLista([...lista]);
  };
  return (
    <div className="row mb-2">
      <div className="col-md-12 border rounded p-2 d-flex justify-content-between align-items-center">
        <span
          className={tarea.completada ? "text-decoration-line-through" : ""}
        >
          {tarea.tarea}
        </span>
        <div>
          <button
            className="btn btn-sm btn-success me-2"
            onClick={handleClickDone}
          >
            Done!
          </button>
          <button className="btn btn-sm btn-danger" onClick={handleClickDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
