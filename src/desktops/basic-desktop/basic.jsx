import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import {
  faCheck,
  faChevronCircleUp,
  faExpandArrowsAlt,
  faFilter,
  faPlus,
  faSyncAlt,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import ReusableTable from './reusable-table';
import { column1, column2, column3, column4, column5 } from './table.data';

function Basic() {
  const [tableData, setTableData] = useState({
    data1: [],
    data2: [],
    data3: [],
    data4: [],
    data5: [],
  });

  useEffect(() => {
    const generateTableData = (rows, columns) => {
      return Array.from({ length: rows }, (_, rowIndex) => {
        return Array.from({ length: columns }, (_, colIndex) => {
          const id = `${rowIndex}-${colIndex}`;
          const text = `Ряд ${rowIndex + 1} Кол ${colIndex + 1}`;
          return { id, text };
        });
      });
    };

    setTableData({
      data1: generateTableData(3, column1.length),
      data2: generateTableData(3, column2.length),
      data3: generateTableData(3, column3.length),
      data4: generateTableData(3, column4.length),
      data5: generateTableData(3, column5.length),
    });
  }, []);

  return (
    <>
      <button className='button-refresh'>
        <FontAwesomeIcon icon={faSyncAlt} className='refresh-icon' />
        <span>Оновити</span>
      </button>
      <div className='desktop-container'>
        <div className='desktop-item'>
          <div className='desktop-block'>
            <div className='desktop-block-item'>
              <span>Мені на розгляд</span>
              <div>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faChevronCircleUp} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
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
          </div>
          <div className='desktop-block'>
            <div className='desktop-block-item'>
              <span>Мені на виконання</span>
              <div>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faChevronCircleUp} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
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
          </div>
          <div className='desktop-block'>
            <div className='desktop-block-item'>
              <span>Контроль</span>
              <div>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faChevronCircleUp} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
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
          </div>
        </div>
        <div className='desktop-item'>
          <div className='desktop-block'>
            <div className='desktop-block-item'>
              <span>Мені на підпис</span>
              <div>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faChevronCircleUp} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
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
          </div>
          <div className='desktop-block'>
            <div className='desktop-block-item'>
              <span>Мені на візування</span>
              <div>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faChevronCircleUp} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
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
          </div>
          <div className='desktop-block'>
            <div className='desktop-block-item'>
              <span>Для інформації</span>
              <div>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faChevronCircleUp} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <button className='block-icon'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
export default Basic;
