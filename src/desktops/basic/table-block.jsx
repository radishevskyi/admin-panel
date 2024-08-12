import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faExpandArrowsAlt,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import ReusableTable from './reusable-table';
import { useState } from 'react';

function TableBlock({
  title,
  headerColumns,
  data,
  isCollapsed,
  isVisible,
  onToggleCollapse,
  onClose,
  icons,
}) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`desktop-block ${isCollapsed ? 'collapsed' : ''} ${
        isClosing ? 'closing' : ''
      }`}
    >
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
          <button className='block-icon' onClick={handleClose}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
      </div>
      {!isCollapsed && (
        <>
          <div>
            {icons.map((icon, index) => (
              <button className='item-buttons' key={index}>
                <FontAwesomeIcon icon={icon} />
              </button>
            ))}
          </div>
          <div className='desktop-table'>
            <ReusableTable headerColumns={headerColumns} data={data} />
          </div>
        </>
      )}
    </div>
  );
}

export default TableBlock;
