import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import { initialState } from './basic.utils';
import TableBlock from './table-block';

function Basic() {
  const [tables, setTables] = useState(initialState);

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
              headerColumns={table.columns}
              data={table.data}
              isCollapsed={table.isCollapsed}
              isVisible={table.isVisible}
              onToggleCollapse={() => toggleCollapse(table.key)}
              onClose={() => closeTable(table.key)}
              icons={table.icons}
            />
          ))}
        </div>
        <div className='desktop-item'>
          {tables.toSpliced(0, 3).map((table) => (
            <TableBlock
              key={table.key}
              title={table.title}
              headerColumns={table.columns}
              data={table.data}
              isCollapsed={table.isCollapsed}
              isVisible={table.isVisible}
              onToggleCollapse={() => toggleCollapse(table.key)}
              onClose={() => closeTable(table.key)}
              icons={table.icons}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Basic;
