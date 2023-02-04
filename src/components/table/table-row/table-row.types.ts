interface IUpdateRowEntity extends IRowState {
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  supportCosts: number;
}

interface IRowListEntity extends IUpdateRowEntity {
  parentId?: number | null;
  id?: number;
  total?: number;
  child?: IRowListEntity[];
}

interface TableRowProps {
  data: IRowListEntity;
  level: number;
  path: number[];
}

interface IRowState {
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
}

interface IUpdateRowsResponse {
  current: IRowListEntity;
  changed: IRowListEntity[];
}

interface IDeleteRowResponse {
  current: null;
  changed: IRowListEntity[];
}

export type { TableRowProps, IRowListEntity, IUpdateRowEntity, IRowState, IUpdateRowsResponse, IDeleteRowResponse };
