import { Table as TableBootstrap } from "react-bootstrap";
// me daba error importandolo sin el 'as TableBootstrap' porque confunde el componente Table con el Table de Bootstrap

const Table = ({ netIncomes }) => {
  const totalIncome = netIncomes.reduce((acc, row) => acc + row.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div className="m-2">
      <TableBootstrap striped bordered hover>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Net Income</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>${item.income.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </TableBootstrap>
      <p>Average Net Income: ${averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default Table;
