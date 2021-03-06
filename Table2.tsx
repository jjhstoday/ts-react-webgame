import React, { useContext } from 'react';
import { TableContext } from './MineSearch';
import Tr from './Tr2';

export default function Table() {
  const { tableData } = useContext(TableContext);

  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill(null)
          .map((tr, i) => (
            <Tr rowIndex={i} key={i} />
          ))}
      </tbody>
    </table>
  );
}
