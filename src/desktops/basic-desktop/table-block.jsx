import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

function TableBlock({
  title,
  columns,
  data,
  isCollapsed,
  isVisible,
  onToggleCollapse,
  onClose,
}) {
  if (!isVisible) return null;

  return (
    <div className={`desktop-block ${isCollapsed ? 'collapsed' : ''}`}>
      <div className='desktop-block-item'>
        <span>{title}</span>
        <div>
          <button className='block-icon' onClick={onToggleCollapse}>
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronCircleDown : faChevronCircleUp}
            />
          </button>
          <button className='block-icon'>
            <FontAwesomeIcon icon={faExpandArrowsAlt} />
          </button>
          <button className='block-icon' onClick={onClose}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
      </div>
      {!isCollapsed && (
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
            <ReusableTable columns={columns} data={data} />
          </div>
        </>
      )}
    </div>
  );
}

export default TableBlock;
