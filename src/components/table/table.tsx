import { useContext, useEffect, useState } from 'react';
import { CleanRow } from '../../classes/row-classes';
import { TableContext } from '../../context/table-context/table-context';
import { getRows } from '../../service/row-api';
import { TableRow } from './table-row/table-row';
import { IRowListEntity } from './table-row/table-row.types';
import styles from './table.module.sass';

export function Table() {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const { setRows, rows } = useContext(TableContext);

  function printRows(data: IRowListEntity[]) {
    let level = 0;
    let rows: JSX.Element[] = [];

    (function unroll(data: IRowListEntity[], path?: number[]) {
      data.forEach((row, i) => {
        const curPath = path ? [...path] : [];
        curPath.push(i);

        rows.push(
          <TableRow
            data={row}
            level={level}
            path={[...curPath]}
            key={row.id || path?.toString()}
          />,
        );

        if (!!row.child && row.child.length > 0) {
          level++;
          rows.concat(unroll(row.child, [...curPath]));
          level--;
        }
      });
      return rows;
    })(data);

    return rows;
  }

  useEffect(() => {
    getRows().then((data) => {
      setRows(data);
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
    <table className={styles.table}>
      <thead>
        <tr className={styles.table_header}>
          <th>Уровень</th>
          <th>Наименование работ</th>
          <th>Основная з/п</th>
          <th>Оборудование</th>
          <th>Накладные расходы</th>
          <th>Сметная прибыль</th>
        </tr>
      </thead>
      <tbody>
        {rows.length ? (
          printRows(rows)
        ) : (
          <TableRow data={new CleanRow(null)} level={0} path={[0]} />
        )}
      </tbody>
    </table>
  );
}
