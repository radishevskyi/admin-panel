import React from 'react';

const ReusableTable = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr className='table-header'>
          {columns.map((col, index) => (
            <th className='table-header-items' key={index}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReusableTable;
