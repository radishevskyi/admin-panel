import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <ReusableTable columns={column1} data={[]} />
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
              <ReusableTable columns={column2} data={[]} />
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
              <ReusableTable columns={column3} data={[]} />
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
              <ReusableTable columns={column4} data={[]} />
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
              <ReusableTable columns={column4} data={[]} />
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
              <ReusableTable columns={column5} data={[]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Basic;
