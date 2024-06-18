import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ListItem({
  text,
  icon,
  isSidebarCollapsed,
  subMenu,
  onClick,
  isOpen,
  openSubItemId,
  handleSubItemToggle,
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
            <ListItem
              key={subItem.id}
              text={subItem.text}
              icon={subItem.icon}
              subMenu={subItem.nestedSubMenu}
              isSidebarCollapsed={isSidebarCollapsed}
              onClick={handleSubItemToggle(subItem.id)}
              isOpen={subItem.id === openSubItemId}
              handleSubItemToggle={() => {}}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default ListItem;
