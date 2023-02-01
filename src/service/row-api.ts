import { RowListEntity } from '../components/table/table-row/table-row.types';

const eID = 34117;
const baseURL = 'http://185.244.172.108:8081';

async function getRows() {

  const response = await fetch(
    `${baseURL}/v1/outlay-rows/entity/${eID}/row/list`,
  );

  const result: RowListEntity[] = await response.json();

  return result;
}

export { getRows };
