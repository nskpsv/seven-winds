import { ReactNode } from "react";
import { IRowListEntity } from "../../components/table/table-row/table-row.types";

interface ITableContext {
    rows: IRowListEntity[];
    setRows: React.Dispatch<React.SetStateAction<IRowListEntity[]>>;
  }

  interface ITableContextProps {
    children: ReactNode
  }

  export type { ITableContext, ITableContextProps };