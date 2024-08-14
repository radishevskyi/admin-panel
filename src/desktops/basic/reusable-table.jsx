import React from 'react';

const ReusableTable = ({ headerColumns, data }) => {
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
        {data.map((row, rowIndex) => (
          <tr className='table-row' key={rowIndex}>
            {row.map((colData, colIndex) => (
              <td className='table-header-items' key={colIndex}>
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
