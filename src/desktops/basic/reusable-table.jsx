import React from 'react';

const ReusableTable = ({ headerColumns, data, id }) => {
  return (
    <table>
      <thead>
        <tr className='table-header'>
          {headerColumns.map((col) => (
            <th className='table-header-items' key={col.id}>
              {col.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr className='table-row' key={row.id}>
            {row.rowData.map((colData) => (
              <td className='table-header-items' key={colData.id}>
                {colData.text}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReusableTable;
