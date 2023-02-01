import { RowListEntity } from "./table-row/table-row.types";

type TableProps = {
  rows: RowListEntity[];
};

type EntitiesObject = { [key: string]: RowListEntity };

interface ITableContext {
    addRow: (parentID: number) => void;
  };

export type { TableProps, ITableContext, EntitiesObject };
