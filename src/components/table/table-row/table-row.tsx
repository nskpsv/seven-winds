import styles from '../table.module.sass';
import React, { useEffect, useState } from 'react';
import {
  CreateRowEntity,
  RowListEntity,
  TableRowProps,
} from './table-row.types';
import { TreeIcons } from '../../tree-icons/tree-icons';

export function TableRow({ data, level }: TableRowProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [state, setState] = useState<RowListEntity | CreateRowEntity>(data);

  function updateState(e: React.ChangeEvent<HTMLInputElement>) {
    setState((current) => ({ ...current, [e.target.name]: e.target.value }));
  }

  function toggleIsEdit() {
    setIsEdit((current) => !current);
  }

  function doubleClickHandler(e: React.MouseEvent<HTMLTableRowElement>) {
    if (!isEdit) toggleIsEdit();
  }

  function handlerEnterPress(e: React.KeyboardEvent<HTMLTableRowElement>) {
    if (e.key === 'Enter') {
      toggleIsEdit();
    }
  }

  useEffect(() => {
    if (state.rowName === '') toggleIsEdit();
  }, []);

  return isEdit ? (
    <tr
      className={styles.table_row}
      onDoubleClick={doubleClickHandler}
      onKeyDown={handlerEnterPress}
    >
      <td width="6.7%">
        <TreeIcons isEnable={!isEdit} />
      </td>
      <td className={styles.td__edit}>
        <input
          onChange={updateState}
          value={state.rowName}
          name="rowName"
          autoFocus
        />
      </td>
      <td className={styles.td__edit} width="12%">
        <input onChange={updateState} value={state.salary} name="salary" />
      </td>
      <td className={styles.td__edit} width="12%">
        <input
          onChange={updateState}
          value={state.equipmentCosts}
          name="equipmentCosts"
        />
      </td>
      <td className={styles.td__edit} width="12%">
        <input
          onChange={updateState}
          value={state.overheads}
          name="overheads"
        />
      </td>
      <td className={styles.td__edit} width="12%">
        <input
          onChange={updateState}
          value={state.estimatedProfit}
          name="estimatedProfit"
        />
      </td>
    </tr>
  ) : (
    <tr
      className={styles.table_row}
      onDoubleClick={doubleClickHandler}
      onKeyDown={handlerEnterPress}
    >
      <td width="6.7%">
        <TreeIcons isEnable={!isEdit} />
      </td>
      <td>{state.rowName}</td>
      <td width="12%">{state.salary}</td>
      <td width="12%">{state.equipmentCosts}</td>
      <td width="12%">{state.overheads}</td>
      <td width="12%">{state.estimatedProfit}</td>
    </tr>
  );
}
