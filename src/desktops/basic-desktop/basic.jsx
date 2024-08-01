import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  faCheck,
  faChevronCircleDown,
  faChevronCircleUp,
  faExpandArrowsAlt,
  faFilter,
  faPlus,
  faSyncAlt,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import ReusableTable from './reusable-table';
import { column1, column2, column3, column4, column5 } from './table.data';
import { generateTableData } from './basic-desktop.utils';

function Basic() {
  const [collapsedTables, setCollapsedTables] = useState({
    table1: false,
    table2: false,
    table3: false,
    table4: false,
    table5: false,
    table6: false,
  });

  const [visibleTables, setVisibleTables] = useState({
    table1: true,
    table2: true,
    table3: true,
    table4: true,
    table5: true,
    table6: false,
  });

  const [tableData] = useState({
    data1: generateTableData(3, column1.length),
    data2: generateTableData(3, column2.length),
    data3: generateTableData(3, column3.length),
    data4: generateTableData(3, column4.length),
    data5: generateTableData(3, column5.length),
  });

  const toggleCollapse = (tableKey) => {
    setCollapsedTables((prevState) => ({
      ...prevState,
      [tableKey]: !prevState[tableKey],
    }));
  };

  const closeTable = (tableKey) => {
    setVisibleTables((prevState) => ({
      ...prevState,
      [tableKey]: false,
    }));
  };

  return (
    <>
      <button className='button-refresh'>
        <FontAwesomeIcon icon={faSyncAlt} className='refresh-icon' />
        <span>Оновити</span>
      </button>
      <div className='desktop-container'>
        <div className='desktop-item'>
          {visibleTables.table1 && (
            <div
              className={`desktop-block ${
                collapsedTables.table1 ? 'collapsed' : ''
              }`}
            >
              <div className='desktop-block-item'>
                <span>Мені на розгляд</span>
                <div>
                  <button
                    className='block-icon'
                    onClick={() => toggleCollapse('table1')}
                  >
                    <FontAwesomeIcon
                      icon={
                        collapsedTables.table1
                          ? faChevronCircleDown
                          : faChevronCircleUp
                      }
                    />
                  </button>
                  <button className='block-icon'>
                    <FontAwesomeIcon icon={faExpandArrowsAlt} />
                  </button>
                  <button
                    className='block-icon'
                    onClick={() => closeTable('table1')}
                  >
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </button>
                </div>
              </div>
              {!collapsedTables.table1 && (
                <>
                  <div>
                    <button className='item-buttons'>
                      <FontAwesomeIcon icon={faSyncAlt} />
                    </button>
                    <button className='item-buttons'>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className='item-buttons'>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button className='item-buttons'>
                      <FontAwesomeIcon icon={faFilter} />
                    </button>
                  </div>
                  <div className='desktop-table'>
                    <ReusableTable columns={column1} data={tableData.data1} />
                  </div>
                </>
              )}
            </div>
          )}
          <div
            className={`desktop-block ${
              collapsedTables.table2 ? 'collapsed' : ''
            }`}
          >
            <div className='desktop-block-item'>
              <span>Мені на виконання</span>
              <div>
                <button
                  className='block-icon'
                  onClick={() => toggleCollapse('table2')}
                >
                  <FontAwesomeIcon
                    icon={
                      collapsedTables.table2
                        ? faChevronCircleDown
                        : faChevronCircleUp
                    }
                  />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
            {!collapsedTables.table2 && (
              <>
                <div>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </button>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faFilter} />
                  </button>
                </div>
                <div className='desktop-table'>
                  <ReusableTable columns={column2} data={tableData.data2} />
                </div>
              </>
            )}
          </div>
          <div
            className={`desktop-block ${
              collapsedTables.table3 ? 'collapsed' : ''
            }`}
          >
            <div className='desktop-block-item'>
              <span>Контроль</span>
              <div>
                <button
                  className='block-icon'
                  onClick={() => toggleCollapse('table3')}
                >
                  <FontAwesomeIcon
                    icon={
                      collapsedTables.table3
                        ? faChevronCircleDown
                        : faChevronCircleUp
                    }
                  />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
            {!collapsedTables.table3 && (
              <>
                <div>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </button>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faFilter} />
                  </button>
                </div>
                <div className='desktop-table'>
                  <ReusableTable columns={column3} data={tableData.data3} />
                </div>
              </>
            )}
          </div>
        </div>
        <div className='desktop-item'>
          <div
            className={`desktop-block ${
              collapsedTables.table4 ? 'collapsed' : ''
            }`}
          >
            <div className='desktop-block-item'>
              <span>Мені на підпис</span>
              <div>
                <button
                  className='block-icon'
                  onClick={() => toggleCollapse('table4')}
                >
                  <FontAwesomeIcon
                    icon={
                      collapsedTables.table4
                        ? faChevronCircleDown
                        : faChevronCircleUp
                    }
                  />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
            {!collapsedTables.table4 && (
              <>
                <div>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </button>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faFilter} />
                  </button>
                </div>
                <div className='desktop-table'>
                  <ReusableTable columns={column4} data={tableData.data4} />
                </div>
              </>
            )}
          </div>
          <div
            className={`desktop-block ${
              collapsedTables.table5 ? 'collapsed' : ''
            }`}
          >
            <div className='desktop-block-item'>
              <span>Мені на візування</span>
              <div>
                <button
                  className='block-icon'
                  onClick={() => toggleCollapse('table5')}
                >
                  <FontAwesomeIcon
                    icon={
                      collapsedTables.table5
                        ? faChevronCircleDown
                        : faChevronCircleUp
                    }
                  />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
            {!collapsedTables.table5 && (
              <>
                <div>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </button>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faFilter} />
                  </button>
                </div>
                <div className='desktop-table'>
                  <ReusableTable columns={column4} data={tableData.data5} />
                </div>
              </>
            )}
          </div>
          <div
            className={`desktop-block ${
              collapsedTables.table6 ? 'collapsed' : ''
            }`}
          >
            <div className='desktop-block-item'>
              <span>Для інформації</span>
              <div>
                <button
                  className='block-icon'
                  onClick={() => toggleCollapse('table6')}
                >
                  <FontAwesomeIcon
                    icon={
                      collapsedTables.table6
                        ? faChevronCircleDown
                        : faChevronCircleUp
                    }
                  />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
            {!collapsedTables.table6 && (
              <>
                <div>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </button>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button className='item-buttons'>
                    <FontAwesomeIcon icon={faFilter} />
                  </button>
                </div>
                <div className='desktop-table'>
                  <ReusableTable columns={column5} data={tableData.data5} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Basic;
