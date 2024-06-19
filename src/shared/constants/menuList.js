import {
  faArchive,
  faBook,
  faCircle,
  faExchange,
  faFileContract,
  faInbox,
  faLock,
  faPieChart,
  faReplyAll,
  faSearch,
  faSuitcase,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFolderOpen,
  faArrowAltCircleRight,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faFileAlt,
  faCheckSquare,
  faEye,
  faListAlt,
  faFileText,
} from '@fortawesome/free-regular-svg-icons';

const menuList = [
  {
    id: 1,
    icon: faFolderOpen,
    text: 'Адміністративні послуги',
    subMenu: [
      {
        id: 1.1,
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { id: 111, text: 'За тиждень' },
          { id: 112, text: 'За 30 днів' },
        ],
      },
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
      {
        id: 4.1,
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { id: 111, text: 'За сьогодні' },
          { id: 111, text: 'За тиждень' },
          { id: 112, text: 'За 30 днів' },
          { id: 112, text: 'За поточний місяць' },
          { id: 111, text: 'За поточний рік' },
          { id: 112, text: 'За минулий рік' },
          { id: 112, text: 'За попередні роки' },
        ],
      },
      { id: 4.2, text: 'На редагуванні' },
      { id: 4.3, text: 'Мені на розгляд' },
      { id: 4.4, text: 'Розглянуті мною' },
      { id: 4.5, text: 'Повернуті з розгляду' },
    ],
  },
  {
    id: 5,
    icon: faArrowAltCircleDown,
    text: 'Внутрішні',
    subMenu: [
      {
        id: 5.1,
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { id: 111, text: 'За сьогодні' },
          { id: 111, text: 'За тиждень' },
          { id: 112, text: 'За 30 днів' },
          { id: 112, text: 'За поточний місяць' },
          { id: 111, text: 'За поточний рік' },
          { id: 112, text: 'За минулий рік' },
          { id: 112, text: 'За попередні роки' },
        ],
      },
      { id: 5.2, text: 'На редагуванні' },
      { id: 5.3, text: 'Мені на розгляд' },
      { id: 5.4, text: 'Повернуті з розгляду' },
      { id: 5.5, text: 'Повернуті з реєстрації' },
      { id: 5.6, text: 'Мені на підприсання' },
      { id: 5.7, text: 'Мені на узгодження' },
      { id: 5.8, text: 'Мені на візування' },
      { id: 5.9, text: 'Узгоджені мною' },
      { id: 5.11, text: 'Розглянуті мною' },
    ],
  },
  {
    id: 6,
    icon: faArrowAltCircleLeft,
    text: 'Вихідні',
    subMenu: [
      {
        id: 6.1,
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { id: 111, text: 'За сьогодні' },
          { id: 111, text: 'За тиждень' },
          { id: 112, text: 'За 30 днів' },
          { id: 112, text: 'За поточний місяць' },
          { id: 111, text: 'За поточний рік' },
          { id: 112, text: 'За минулий рік' },
          { id: 112, text: 'За попередні роки' },
        ],
      },
      { id: 6.2, text: 'На редагуванні' },
      { id: 6.3, text: 'Повернуті з реєстрації' },
      { id: 6.4, text: 'Мені на підприсання' },
      { id: 6.5, text: 'Мені на узгодження' },
      { id: 6.6, text: 'Мені на візування' },
      { id: 6.7, text: 'Узгоджені мною' },
      { id: 6.8, text: 'Повернуті з узгодження' },
      { id: 6.9, text: 'Відмінені' },
    ],
  },
  {
    id: 7,
    icon: faUsers,
    text: 'Письмові звернення громадян',
    subMenu: [
      {
        id: 7.1,
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { id: 111, text: 'За сьогодні' },
          { id: 111, text: 'За тиждень' },
          { id: 112, text: 'За 30 днів' },
          { id: 112, text: 'За поточний місяць' },
          { id: 111, text: 'За поточний рік' },
          { id: 112, text: 'За минулий рік' },
          { id: 112, text: 'За попередні роки' },
        ],
      },
      { id: 7.2, text: 'На редагуванні' },
      { id: 7.3, text: 'Мені на розгляд' },
      { id: 7.4, text: 'Розглянуті мною' },
      { id: 7.5, text: 'Повернуті з розгляду' },
    ],
  },
  {
    id: 8,
    icon: faArrowAltCircleRight,
    text: 'Усні звернення громадян',
    subMenu: [
      {
        id: 8.1,
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { id: 111, text: 'За сьогодні' },
          { id: 111, text: 'За тиждень' },
          { id: 112, text: 'За 30 днів' },
          { id: 112, text: 'За поточний місяць' },
          { id: 111, text: 'За поточний рік' },
          { id: 112, text: 'За минулий рік' },
          { id: 112, text: 'За попередні роки' },
        ],
      },
      { id: 8.2, text: 'На редагуванні' },
      { id: 8.3, text: 'Мені на розгляд' },
      { id: 8.4, text: 'Мені на виконання' },
      { id: 8.5, text: 'Мені на виконання - співвиконавець' },
      { id: 8.6, text: 'Розглянуті мною' },
    ],
  },
  {
    id: 9,
    icon: faFolderOpen,
    text: 'Запити на отримання публічної інформації',
    subMenu: [
      {
        id: 9.1,
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { id: 111, text: 'За сьогодні' },
          { id: 111, text: 'За тиждень' },
          { id: 112, text: 'За 30 днів' },
          { id: 112, text: 'За поточний місяць' },
          { id: 111, text: 'За поточний рік' },
          { id: 112, text: 'За минулий рік' },
          { id: 112, text: 'За попередні роки' },
        ],
      },
      { id: 9.2, text: 'На редагуванні' },
      { id: 9.3, text: 'Мені на розгляд' },
      { id: 9.4, text: 'Розглянуті мною' },
      { id: 9.5, text: 'Повернуті з розгляду' },
    ],
  },
  {
    id: 10,
    icon: faFileText,
    text: 'Облікові документи',
    subMenu: [
      { id: 10.1, text: 'За сьогодні' },
      { id: 10.2, text: 'За тиждень' },
      { id: 10.3, text: 'За 30 днів' },
      { id: 10.4, text: 'За поточний місяць' },
      { id: 10.5, text: 'За поточний рік' },
      { id: 10.6, text: 'За минулий рік' },
      { id: 10.7, text: 'За попередні роки' },
    ],
  },
  { id: 11, icon: faFileContract, text: 'Договори' },
  { id: 12, icon: faInbox, text: 'Довіреності' },
  { id: 13, icon: faSuitcase, text: 'Відрядження' },
  { id: 14, icon: faCircle, text: 'СЗЗР' },
  { id: 15, icon: faLock, text: 'Документи КТ' },
  { id: 16, icon: faCheckSquare, text: 'Узгодження документів' },
  { id: 17, icon: faReplyAll, text: 'Виконання документів' },
  { id: 18, icon: faEye, text: 'Контроль' },
  { id: 19, icon: faExchange, text: 'Рух документів' },
  { id: 20, icon: faListAlt, text: 'Реєстри передач' },
  { id: 21, icon: faPieChart, text: 'Звіти' },
  { id: 22, icon: faBook, text: 'Конструктор звітів' },
  { id: 23, icon: faSearch, text: 'Пошук' },
];

export default menuList;
