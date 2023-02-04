import { createContext, useState } from 'react';
import { IRowListEntity } from '../../components/table/table-row/table-row.types';
import { ITableContext, ITableContextProps } from './table-context.types';

const TableContext = createContext<ITableContext>({
  rows: [],
  setRows: () => {},
});

function TableProvider({ children }: ITableContextProps) {
  const [rows, setRows] = useState<IRowListEntity[]>([]);

  return (
    <TableContext.Provider
      value={{
        rows: rows,
        setRows: setRows,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export { TableProvider, TableContext };
