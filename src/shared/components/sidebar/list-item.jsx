import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DesktopContext } from '@/shared/context/desktop';

function ListItem({
  text,
  icon,
  isSidebarCollapsed,
  subMenu,
  onClick,
  isOpen,
  openSubItemId,
  handleSubItemToggle,
  className,
  indentLevel = 1,
  columns,
  rows,
  id,
}) {
  const indentStyle = {
    paddingLeft: `${indentLevel * 10}px`,
  };

  const { addDesktop } = useContext(DesktopContext);

  return (
    <li className={`list-item-container ${className || ''}`}>
      <div
        className={`sidebar-list-item ${isOpen ? 'active' : ''} ${
          isSidebarCollapsed ? 'collapsed' : ''
        }`}
        onClick={
          !subMenu
            ? () => addDesktop({ id, columns, rows, title: text })
            : onClick
        }
        style={indentStyle}
      >
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={`menu-icons ${
              isSidebarCollapsed ? 'is--sidebar-collapsed' : ''
            }`}
          />
        )}
        {!isSidebarCollapsed && (
          <>
            <span>{text}</span>
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
        <ul className={`submenu ${isOpen ? 'is--open' : ''}`}>
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
              indentLevel={indentLevel + 1}
              columns={subItem.columns || []}
              rows={subItem.rows || []}
              id={subItem.id}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default ListItem;
