import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArchive } from '@fortawesome/free-solid-svg-icons';
import {
  faFolderOpen,
  faArrowAltCircleRight,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faFileAlt,
} from '@fortawesome/free-regular-svg-icons';
import styles from '@/shared/components/sidebar/sidebar.module.scss';
import Header from '@/shared/components/sidebar/header';
const menuList = [
  {
    id: 1,
    icon: faFolderOpen,
    text: 'Адміністративні послуги',
  },
  {
    id: 2,
    icon: faFileAlt,
    text: 'Мої проєкти',
  },
  {
    id: 3,
    icon: faArchive,
    text: 'Мої документи',
  },
  { id: 4, icon: faArrowAltCircleRight, text: 'Вхідні' },
  { id: 5, icon: faArrowAltCircleDown, text: 'Внутрішні' },
  { id: 6, icon: faArrowAltCircleLeft, text: 'Вихідні' },
];
function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <Header />
        <ul className={styles.navigation}>
          {menuList.map((item) => (
            <li key={item.id} className={styles.sidebarList}>
              <FontAwesomeIcon icon={item.icon} className={styles.icons} />
              <span className={styles.adminServices}>{item.text}</span>
              <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
