import {
  IDeleteRowResponse,
  IRowListEntity,
  IUpdateRowEntity,
  IUpdateRowsResponse,
} from '../components/table/table-row/table-row.types';

const baseURL = 'http://185.244.172.108:8081/v1/outlay-rows/entity/34117/row';

async function getRows() {
  const response = await fetch(`${baseURL}/list`);

  const result: IRowListEntity[] = await response.json();

  return result;
}

async function createRow(newRow: IRowListEntity) {
  const response = await fetch(`${baseURL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newRow),
  });

  const result: IUpdateRowsResponse = await response.json();

  return result;
}

async function updateRow(row: IUpdateRowEntity, rID: number) {
  const response = await fetch(`${baseURL}/${rID}/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(row),
  });

  const result: IUpdateRowsResponse = await response.json();

  return result;
}

async function deleteRow(rID: number) {
  const response = await fetch(`${baseURL}/${rID}/delete`, {
    method: 'DELETE',
  });

  const result: IDeleteRowResponse = await response.json();

  return result;
}

export { getRows, createRow, updateRow, deleteRow };
