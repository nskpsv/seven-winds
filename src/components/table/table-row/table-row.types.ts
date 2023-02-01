interface UpdateRowEntity {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
}

interface CreateRowEntity extends UpdateRowEntity {
  parentId: number | null;
}

interface RowListEntity extends UpdateRowEntity {
  id?: number;
  total?: number;
  child?: Array<RowListEntity | CreateRowEntity>;
}

type TableRowProps = {
  data: RowListEntity | CreateRowEntity;
  level: number;
};

class Row implements CreateRowEntity {
  equipmentCosts = 0;
  estimatedProfit = 0;
  machineOperatorSalary = 0;
  mainCosts = 0;
  materials = 0;
  mimExploitation = 0;
  overheads = 0;
  rowName = '';
  salary = 0;
  supportCosts = 0;
  parentId;

  constructor(parentId: number | null) {
    this.parentId = parentId;
  }
}

export type { TableRowProps, RowListEntity, CreateRowEntity };
export { Row };
