import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { column1, column2, column3, column4, column5 } from './table.data';
import { generateTableData } from './basic-desktop.utils';
import TableBlock from './table-block';

function Basic() {
  const [tables, setTables] = useState([
    {
      key: 'table1',
      title: 'Мені на розгляд',
      columns: column1,
      data: generateTableData(3, column1.length),
      isCollapsed: false,
      isVisible: true,
    },
    {
      key: 'table2',
      title: 'Мені на виконання',
      columns: column2,
      data: generateTableData(3, column2.length),
      isCollapsed: false,
      isVisible: true,
    },
    {
      key: 'table3',
      title: 'Контроль',
      columns: column3,
      data: generateTableData(3, column3.length),
      isCollapsed: false,
      isVisible: true,
    },
    {
      key: 'table4',
      title: 'Мені на підпис',
      columns: column4,
      data: generateTableData(3, column4.length),
      isCollapsed: false,
      isVisible: true,
    },
    {
      key: 'table5',
      title: 'Мені на візування',
      columns: column5,
      data: generateTableData(3, column5.length),
      isCollapsed: false,
      isVisible: true,
    },
    {
      key: 'table6',
      title: 'Для інформації',
      columns: column5,
      data: generateTableData(3, column5.length),
      isCollapsed: false,
      isVisible: true,
    },
  ]);

  const toggleCollapse = (tableKey) => {
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.key === tableKey
          ? { ...table, isCollapsed: !table.isCollapsed }
          : table
      )
    );
  };

  const closeTable = (tableKey) => {
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.key === tableKey ? { ...table, isVisible: false } : table
      )
    );
  };

  return (
    <>
      <button className='button-refresh'>
        <FontAwesomeIcon icon={faSyncAlt} className='refresh-icon' />
        <span>Оновити</span>
      </button>
      <div className='desktop-container'>
        <div className='desktop-item'>
          {tables.toSpliced(3, 3).map((table) => (
            <TableBlock
              key={table.key}
              title={table.title}
              columns={table.columns}
              data={table.data}
              isCollapsed={table.isCollapsed}
              isVisible={table.isVisible}
              onToggleCollapse={() => toggleCollapse(table.key)}
              onClose={() => closeTable(table.key)}
            />
          ))}
        </div>
        <div className='desktop-item'>
          {tables.toSpliced(0, 3).map((table) => (
            <TableBlock
              key={table.key}
              title={table.title}
              columns={table.columns}
              data={table.data}
              isCollapsed={table.isCollapsed}
              isVisible={table.isVisible}
              onToggleCollapse={() => toggleCollapse(table.key)}
              onClose={() => closeTable(table.key)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Basic;
