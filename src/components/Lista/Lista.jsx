import Item from "../Item/Item";

const Lista = ({ lista, setLista }) => {
  return (
    <div>
      {lista.map((item) => {
        return (
          <Item key={item.id} tarea={item} lista={lista} setLista={setLista} />
        );
      })}
    </div>
  );
};

export default Lista;
