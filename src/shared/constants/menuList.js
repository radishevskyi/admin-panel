import { faArchive } from '@fortawesome/free-solid-svg-icons';
import {
  faFolderOpen,
  faArrowAltCircleRight,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faFileAlt,
} from '@fortawesome/free-regular-svg-icons';

const menuList = [
  {
    id: 1,
    icon: faFolderOpen,
    text: 'Адміністративні послуги',
    subMenu: [
      { id: 1.1, text: 'Зареєстровані' },
      { id: 1.2, text: 'На редагуванні' },
      { id: 1.3, text: 'Мені на розгляд' },
      { id: 1.4, text: 'Розглянуті мною' },
      { id: 1.4, text: 'Повернуті з розгляду' },
    ],
  },
  { id: 2, icon: faFileAlt, text: 'Мої проєкти' },
  { id: 3, icon: faArchive, text: 'Мої документи' },
  {
    id: 4,
    icon: faArrowAltCircleRight,
    text: 'Вхідні',
    subMenu: [
      { id: 1.1, text: 'Зареєстровані' },
      { id: 1.2, text: 'На редагуванні' },
      { id: 1.3, text: 'Мені на розгляд' },
      { id: 1.4, text: 'Розглянуті мною' },
      { id: 1.4, text: 'Повернуті з розгляду' },
    ],
  },
  { id: 5, icon: faArrowAltCircleDown, text: 'Внутрішні' },
  { id: 6, icon: faArrowAltCircleLeft, text: 'Вихідні' },
];

export default menuList;
