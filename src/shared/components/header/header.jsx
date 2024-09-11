import { DesktopContext } from '@/shared/context/desktop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faDesktop,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import dropDownUserList from './header.data';
import { useRouter } from 'next/router';
import { useAuth } from '@/shared/context/auth';

function Header() {
  const { desktops, activeDesktopItem, setActiveDesktopItem, closeDesktop } =
    useContext(DesktopContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { logout } = useAuth();
  const router = useRouter();

  const handleMenuClick = (action) => {
    if (action === 'logout') {
      logout();
      router.push('/login');
    }
  };

  return (
    <header>
      <div className='header'>
        <div className='active-desktop'>
          <button className='account-button'>{desktops.length}</button>
          {desktops.map((desktop) => (
            <button
              key={desktop.id}
              className={`active-buttons ${
                desktop.id === activeDesktopItem.id ? 'active-id' : ''
              }`}
              onClick={() => setActiveDesktopItem(desktop)}
            >
              {desktop.title}
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => closeDesktop(desktop.id)}
              />
            </button>
          ))}
        </div>
        <div className='header-item'>
          <button className='header-buttons'>
            <FontAwesomeIcon icon={faDesktop} className='icon' />
          </button>
          <button className='header-buttons'>
            <FontAwesomeIcon icon={faMessage} className='icon' />
          </button>
          <button className='header-buttons'>
            <FontAwesomeIcon icon={faBell} className='icon' />
          </button>
          <button className='header-buttons'>
            <FontAwesomeIcon icon={faSearch} className='icon' />
          </button>
          <button className='header-buttons' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUser} className='icon' />
          </button>
          {isMenuOpen && (
            <div className='dropdown-user-menu'>
              <ul className='dropdown-user-menu-list'>
                {dropDownUserList.map((item) => (
                  <li
                    className='dropdown-user-menu-list-item'
                    key={item.id}
                    onClick={() => handleMenuClick(item.action)}
                  >
                    <FontAwesomeIcon icon={item.icon} className='menu-icons' />
                    <span className='dropdown-user-menu-item'>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
