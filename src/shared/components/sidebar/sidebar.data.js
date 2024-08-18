import { v4 as uuidv4 } from 'uuid';
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
import { column1, column2 } from '@/desktops/basic/table.data';
import { generateTableData } from '@/desktops/basic/basic.utils';

const menuList = [
  {
    icon: faFolderOpen,
    text: 'Адміністративні послуги',
    subMenu: [
      {
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          {
            text: 'За тиждень',
            columns: column2,
            rows: generateTableData(7, column1.length),
          },
          { text: 'За 30 днів' },
        ],
      },
      { text: 'На редагуванні' },
      { text: 'Мені на розгляд' },
      { text: 'Розглянуті мною' },
      { text: 'Повернуті з розгляду' },
    ],
  },
  { icon: faFileAlt, text: 'Мої проєкти' },
  { icon: faArchive, text: 'Мої документи' },
  {
    icon: faArrowAltCircleRight,
    text: 'Вхідні',
    subMenu: [
      {
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { text: 'За сьогодні' },
          { text: 'За тиждень' },
          { text: 'За 30 днів' },
          { text: 'За поточний місяць' },
          { text: 'За поточний рік' },
          { text: 'За минулий рік' },
          { text: 'За попередні роки' },
        ],
      },
      { text: 'На редагуванні' },
      { text: 'Мені на розгляд' },
      { text: 'Розглянуті мною' },
      { text: 'Повернуті з розгляду' },
    ],
  },
  {
    icon: faArrowAltCircleDown,
    text: 'Внутрішні',
    subMenu: [
      {
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { text: 'За сьогодні' },
          { text: 'За тиждень' },
          { text: 'За 30 днів' },
          { text: 'За поточний місяць' },
          { text: 'За поточний рік' },
          { text: 'За минулий рік' },
          { text: 'За попередні роки' },
        ],
      },
      { text: 'На редагуванні' },
      { text: 'Мені на розгляд' },
      { text: 'Повернуті з розгляду' },
      { text: 'Повернуті з реєстрації' },
      { text: 'Мені на підприсання' },
      { text: 'Мені на узгодження' },
      { text: 'Мені на візування' },
      { text: 'Узгоджені мною' },
      { text: 'Розглянуті мною' },
    ],
  },
  {
    icon: faArrowAltCircleLeft,
    text: 'Вихідні',
    subMenu: [
      {
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { text: 'За сьогодні' },
          { text: 'За тиждень' },
          { text: 'За 30 днів' },
          { text: 'За поточний місяць' },
          { text: 'За поточний рік' },
          { text: 'За минулий рік' },
          { text: 'За попередні роки' },
        ],
      },
      { text: 'На редагуванні' },
      { text: 'Повернуті з реєстрації' },
      { text: 'Мені на підприсання' },
      { text: 'Мені на узгодження' },
      { text: 'Мені на візування' },
      { text: 'Узгоджені мною' },
      { text: 'Повернуті з узгодження' },
      { text: 'Відмінені' },
    ],
  },
  {
    icon: faUsers,
    text: 'Письмові звернення громадян',
    subMenu: [
      {
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { text: 'За сьогодні' },
          { text: 'За тиждень' },
          { text: 'За 30 днів' },
          { text: 'За поточний місяць' },
          { text: 'За поточний рік' },
          { text: 'За минулий рік' },
          { text: 'За попередні роки' },
        ],
      },
      { text: 'На редагуванні' },
      { text: 'Мені на розгляд' },
      { text: 'Розглянуті мною' },
      { text: 'Повернуті з розгляду' },
    ],
  },
  {
    icon: faArrowAltCircleRight,
    text: 'Усні звернення громадян',
    subMenu: [
      {
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { text: 'За сьогодні' },
          { text: 'За тиждень' },
          { text: 'За 30 днів' },
          { text: 'За поточний місяць' },
          { text: 'За поточний рік' },
          { text: 'За минулий рік' },
          { text: 'За попередні роки' },
        ],
      },
      { text: 'На редагуванні' },
      { text: 'Мені на розгляд' },
      { text: 'Мені на виконання' },
      { text: 'Мені на виконання - співвиконавець' },
      { text: 'Розглянуті мною' },
    ],
  },
  {
    icon: faFolderOpen,
    text: 'Запити на отримання публічної інформації',
    subMenu: [
      {
        text: 'Зареєстровані',
        icon: faFolderOpen,
        nestedSubMenu: [
          { text: 'За сьогодні' },
          { text: 'За тиждень' },
          { text: 'За 30 днів' },
          { text: 'За поточний місяць' },
          { text: 'За поточний рік' },
          { text: 'За минулий рік' },
          { text: 'За попередні роки' },
        ],
      },
      { text: 'На редагуванні' },
      { text: 'Мені на розгляд' },
      { text: 'Розглянуті мною' },
      { text: 'Повернуті з розгляду' },
    ],
  },
  {
    icon: faFileText,
    text: 'Облікові документи',
    subMenu: [
      {
        text: 'За сьогодні',
        columns: column1,
        rows: generateTableData(4, column1.length),
      },
      { text: 'За тиждень' },
      { text: 'За 30 днів' },
      { text: 'За поточний місяць' },
      { text: 'За поточний рік' },
      { text: 'За минулий рік' },
      { text: 'За попередні роки' },
    ],
  },
  { icon: faFileContract, text: 'Договори' },
  { icon: faInbox, text: 'Довіреності' },
  { icon: faSuitcase, text: 'Відрядження' },
  { icon: faCircle, text: 'СЗЗР' },
  { icon: faLock, text: 'Документи КТ' },
  { icon: faCheckSquare, text: 'Узгодження документів' },
  { icon: faReplyAll, text: 'Виконання документів' },
  { icon: faEye, text: 'Контроль' },
  { icon: faExchange, text: 'Рух документів' },
  { icon: faListAlt, text: 'Реєстри передач' },
  { icon: faPieChart, text: 'Звіти' },
  { icon: faBook, text: 'Конструктор звітів' },
  { icon: faSearch, text: 'Пошук' },
].map((item) => {
  const subMenu = item.subMenu
    ? item.subMenu.map((subItem) => {
        const nestedSubMenu = subItem.nestedSubMenu
          ? subItem.nestedSubMenu.map((nestedSubItem) => ({
              ...nestedSubItem,
              id: uuidv4(),
            }))
          : undefined;
        return { ...subItem, id: uuidv4(), nestedSubMenu };
      })
    : undefined;
  return {
    ...item,
    id: uuidv4(),
    subMenu,
  };
});

const dropDownMenuList = [
  { id: uuidv4(), icon: faArrowAltCircleLeft, text: 'Вихідний документ' },
  { id: uuidv4(), icon: faArrowAltCircleRight, text: 'Внутрішній документ' },
  { id: uuidv4(), icon: faArrowAltCircleDown, text: 'Вхідний документ' },
  { id: uuidv4(), icon: faSuitcase, text: 'Відрядження' },
  { id: uuidv4(), icon: faInbox, text: 'Довіреність' },
  { id: uuidv4(), icon: faFileContract, text: 'Договір' },
];

export { dropDownMenuList, menuList };
