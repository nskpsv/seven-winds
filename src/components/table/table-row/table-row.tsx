import styles from './table-row.module.sass';
import React, { useContext, useEffect, useState } from 'react';
import { IRowListEntity, TableRowProps } from './table-row.types';
import { TreeIcons } from '../index';
import { TableContext } from '../../../context/table-context/table-context';
import { InputField } from '../../input-field';
import { UpdateRowRequestModel } from '../../../classes/row-classes';
import { createRow, deleteRow, updateRow } from '../../../service/row-api';
import {
  addRowToState,
  createEntitiesObject,
  deleteRowFromState,
  updateMap,
} from '../table.service';

export function TableRow({ data, level, path }: TableRowProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [state, setState] = useState<IRowListEntity>(data);
  const { rows, setRows } = useContext(TableContext);

  function updateState(e: React.ChangeEvent<HTMLInputElement>) {
    setState((current) => ({
      ...current,
      [e.target.name]:
        e.target.name === 'rowName' ? e.target.value : Number(e.target.value),
    }));
  }

  function toggleIsEdit() {
    setIsEdit((current) => !current);
  }

  function handlerDoubleClick() {
    if (!isEdit) toggleIsEdit();
  }

  function handlerEnterPress(e: React.KeyboardEvent<HTMLTableRowElement>) {
    if (e.key === 'Enter' && state.rowName.trim()) {
      const updatedRows = [...rows];
      const map = createEntitiesObject(updatedRows);

      if (state.id) {
        updateRow(new UpdateRowRequestModel(state), state.id).then(
          (response) => {
            updateMap(map, response);
          },
        );
      }

      if (state.parentId) {
        createRow(state).then((response) => {
          updateMap(map, response);
        });
      }

      setRows(updatedRows);
      toggleIsEdit();
    }
  }

  function handlerDelete(path: number[]) {
    const updatedRows = [...rows];

    if (data.id) {
      deleteRow(data.id).then((response) => {
        deleteRowFromState(updatedRows, path);

        if (response.changed.length > 0) {
          const map = createEntitiesObject(updatedRows);
          response.changed.forEach((row) => (map[row.id!.toString()] = row));
        }
      });
    } else {
      deleteRowFromState(updatedRows, path);
    }
    setRows(updatedRows);
  }

  function handlerAdd(path: number[]) {
    const updatedRows = [...rows];

    addRowToState(updatedRows, path);
    setRows(updatedRows);
  }

  useEffect(() => {
    if (state.rowName === '') toggleIsEdit();
  }, []);

  return isEdit ? (
    <tr
      className={`${styles.tableRow} ${styles.tableRowEdit}`}
      onDoubleClick={handlerDoubleClick}
      onKeyDown={handlerEnterPress}
    >
      <td>
        <TreeIcons
          enableAdd={false}
          level={level}
          onAdd={() => handlerAdd(path)}
          onDelete={() => {
            handlerDelete(path);
          }}
        />
      </td>
      <td width="757px">
        <InputField
          onChange={updateState}
          value={state.rowName}
          name="rowName"
          type="text"
          autoFocus
        />
      </td>
      <td width={200}>
        <InputField
          onChange={updateState}
          value={state.salary}
          name="salary"
          type="number"
        />
      </td>
      <td width={200}>
        <InputField
          onChange={updateState}
          value={state.equipmentCosts}
          name="equipmentCosts"
          type="number"
        />
      </td>
      <td width={200}>
        <InputField
          onChange={updateState}
          value={state.overheads}
          name="overheads"
          type="number"
        />
      </td>
      <td width={200}>
        <InputField
          onChange={updateState}
          value={state.estimatedProfit}
          name="estimatedProfit"
          type="number"
        />
      </td>
    </tr>
  ) : (
    <tr
      className={styles.tableRow}
      onDoubleClick={handlerDoubleClick}
      onKeyDown={handlerEnterPress}
    >
      <td className={styles.tableRow}>
        <TreeIcons
          enableAdd
          level={level}
          onAdd={() => handlerAdd(path)}
          onDelete={() => {
            handlerDelete(path);
          }}
        />
      </td>
      <td width="757px">{state.rowName}</td>
      <td width={200}>{state.salary}</td>
      <td width={200}>{state.equipmentCosts}</td>
      <td width={200}>{state.overheads}</td>
      <td width={200}>{state.estimatedProfit}</td>
    </tr>
  );
}
