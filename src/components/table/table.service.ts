import { CleanRow } from '../../classes/row-classes';
import {
  IDeleteRowResponse,
  IRowListEntity,
  IUpdateRowsResponse,
} from './table-row/table-row.types';
import { IEntitiesObject } from './table.types';

function createEntitiesObject(data: IRowListEntity[]) {
  let result: IEntitiesObject = {};

  data.forEach((row) => {
    row.id && (result[row.id.toString()] = row);

    if (row.child !== undefined) {
      result = { ...result, ...createEntitiesObject(row.child) };
    }
  });

  return result;
}

function getRowByPath(state: IRowListEntity[], path: number[]) {
  let parent = state[path[0]];

  for (let i = 1; i < path.length; i++) {
    parent = parent.child![path[i]];
  }

  return parent;
}

function updateMap(
  map: IEntitiesObject,
  response: IUpdateRowsResponse | IDeleteRowResponse,
) {
  const { changed, current } = response;

  current && (map[current.id!.toString()] = current);

  changed.length &&
    changed.forEach((row) => {
      map[row.id!.toString()] = row;
    });
}

function addRowToState(state: IRowListEntity[], path: number[]) {
  const parent = getRowByPath(state, path);
  parent.child!.push(new CleanRow(parent.id!));
}

function deleteRowFromState(state: IRowListEntity[], path: number[]) {
  const parentPath = [...path];
  const deletingRowIndex = parentPath.pop() || 0;

  if (parentPath.length > 0) {
    getRowByPath(state, parentPath).child!.splice(deletingRowIndex, 1);
  } else {
    state.splice(deletingRowIndex, 1);
  }
}

export {
  createEntitiesObject,
  getRowByPath,
  updateMap,
  addRowToState,
  deleteRowFromState,
};
