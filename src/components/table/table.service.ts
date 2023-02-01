import { RowListEntity } from './table-row/table-row.types';
import { EntitiesObject } from './table.types';

function createEntitiesObject(data: RowListEntity[]) {
  let result: EntitiesObject = {};

  data.forEach((row) => {
    result[row.id!.toString()] = row;

    if (row.child?.length !== undefined) {
      result = { ...result, ...createEntitiesObject(row.child) };
    }
  });

  return result;
}

export { createEntitiesObject };
