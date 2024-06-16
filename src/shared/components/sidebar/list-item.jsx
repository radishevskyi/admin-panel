import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ListItem({
  text,
  icon,
  isSidebarCollapsed,
  subMenu,
  onClick,
  isOpen,
}) {
  return (
    <li className='list-item-container'>
      <div
        className={`sidebar-list-item ${isSidebarCollapsed ? 'collapsed' : ''}`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} className='menu-icons' />
        {!isSidebarCollapsed && (
          <>
            <span className='menu-item'>{text}</span>
            {subMenu && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`arrow ${isOpen ? 'open' : ''}`}
              />
            )}
          </>
        )}
      </div>
      {subMenu && (
        <ul
          className={`submenu ${isOpen ? 'is--open' : ''} ${
            isSidebarCollapsed ? 'is--sidebar-collapsed' : ''
          }`}
        >
          {subMenu.map((subItem) => (
            <li key={subItem.id} className='sidebar-list-item'>
              <div className='submenu-item'>
                <FontAwesomeIcon
                  icon={subItem.icon}
                  className='submenu-icons'
                />
                <span>{subItem.text}</span>
              </div>
              <FontAwesomeIcon icon={subItem.iconArrow} className='arrow' />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default ListItem;
