import { createContext, useEffect, useState } from 'react';
import { getRows } from '../../service/row-api';
import { TableRow } from './table-row/table-row';
import { RowListEntity, Row } from './table-row/table-row.types';
import styles from './table.module.sass';
import { createEntitiesObject } from './table.service';
import { EntitiesObject, ITableContext } from './table.types';

export function Table() {
  const [rows, setRows] = useState<RowListEntity[]>([]);
  const [entities, setEntities] = useState<EntitiesObject>({});
  const [isFetching, setIsFetching] = useState<boolean>(true);

  function addRow(parentID: number) {
    entities[parentID].child!.push(new Row(parentID))
  }

  const TableContext = createContext<ITableContext>({ addRow });

  const TableProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
      <TableContext.Provider value={{ addRow }}>
        {children}
      </TableContext.Provider>
    );
  };

  function printRows(data: RowListEntity[]) {
    let level = 0;
    let rows: JSX.Element[] = [];

    (function unroll(data: RowListEntity[]) {
      data.forEach((row) => {
        rows.push(<TableRow data={row} level={level} />);

        if (row.child?.length !== undefined) {
          level += 1;
          rows.concat(unroll(row.child));
        }
      });
      return rows;
    })(data);

    return rows;
  }

  useEffect(() => {
    getRows().then((data) => {
      setRows(data);
      setEntities(createEntitiesObject(data));
      setIsFetching((current) => !current);
    });
  }, []);

  if (isFetching)
    return (
      <div className={styles.table}>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <TableProvider>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table_header}>
            <th style={{ flexBasis: '6.7%' }}>Уровень</th>
            <th style={{ flexBasis: '12%' }}>Наименование работ</th>
            <th style={{ flexBasis: '12%' }}>Основная з/п</th>
            <th style={{ flexBasis: '12%' }}>Оборудование</th>
            <th style={{ flexBasis: '12%' }}>Накладные расходы</th>
            <th style={{ flexBasis: '12%' }}>Сметная прибыль</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            printRows(rows)
          ) : (
            <TableRow data={new Row(null)} level={0} />
          )}
        </tbody>
      </table>
    </TableProvider>
  );
}
