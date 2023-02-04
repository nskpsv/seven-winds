import {
  IRowListEntity,
  IRowState,
  IUpdateRowEntity,
} from '../components/table/table-row/table-row.types';

class CleanRow implements IRowListEntity {
  parentId;
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

  constructor(parentId: number | null, state?: IRowState) {
    this.parentId = parentId;

    if (state) {
        const { equipmentCosts, estimatedProfit, overheads, rowName, salary } = state;

        this.equipmentCosts = equipmentCosts;
        this.estimatedProfit = estimatedProfit;
        this.overheads = overheads;
        this.rowName = rowName;
        this.salary = salary
    }
  }
}

class UpdateRowRequestModel implements IUpdateRowEntity {
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

  constructor({
    equipmentCosts,
    estimatedProfit,
    overheads,
    rowName,
    salary,
  }: IRowState) {
    this.equipmentCosts = Number(equipmentCosts);
    this.estimatedProfit = Number(estimatedProfit);
    this.overheads = Number(overheads);
    this.rowName = rowName;
    this.salary = Number(salary);
  }
}

export { CleanRow, UpdateRowRequestModel };
