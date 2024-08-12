import {
  faCheck,
  faFilter,
  faPlus,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';
import { generateTableData } from './basic.utils';

const column1 = [
  { id: 1, text: 'Реєстраційний номер' },
  { id: 2, text: 'Реєстраційна дата' },
  { id: 3, text: 'На розгляді' },
  { id: 4, text: 'Короткий зміст' },
  { id: 5, text: 'Кореспондент' },
  { id: 6, text: 'Строк' },
  { id: 7, text: 'Вид документа' },
  { id: 8, text: 'Стан' },
];

const column2 = [
  { id: 1, text: 'Виконавець' },
  { id: 2, text: 'Роль' },
  { id: 3, text: 'Текст пункту' },
  { id: 4, text: 'Строк' },
  { id: 5, text: 'Документ' },
  { id: 6, text: 'Вид документа' },
  { id: 7, text: 'Кореспондент' },
  { id: 8, text: 'Зміст' },
  { id: 9, text: 'Стан' },
];

const column3 = [
  { id: 1, text: 'Підписант' },
  { id: 2, text: 'Текст завдання' },
  { id: 3, text: 'Строк' },
  { id: 4, text: 'Документ' },
  { id: 5, text: 'Вид документа' },
  { id: 6, text: 'Зміст' },
];

const column4 = [
  { id: 1, text: 'Кому' },
  { id: 2, text: 'Вид' },
  { id: 3, text: 'Системний номер' },
  { id: 4, text: 'Вид документа' },
  { id: 5, text: 'Зміст' },
  { id: 6, text: 'Дата створення' },
  { id: 7, text: 'Створив' },
  { id: 8, text: 'Строк' },
];

const column5 = [
  { id: 1, text: 'Виконавець' },
  { id: 2, text: 'Роль' },
  { id: 3, text: 'Текст пункту' },
  { id: 4, text: 'Строк' },
  { id: 5, text: 'Реєстраційний номер' },
  { id: 6, text: 'Реєстраційна дата' },
  { id: 7, text: 'Вид документа' },
  { id: 8, text: 'Кореспондент' },
  { id: 9, text: 'Зміст' },
];

const iconSets = {
  icons1: [faSyncAlt, faCheck, faPlus, faFilter],
  icons2: [faSyncAlt, faFilter],
  icons3: [faSyncAlt, faCheck, faFilter],
};

export { column1, column2, column3, column4, column5, iconSets };

export const initialState = [
  {
    key: 'table1',
    title: 'Мені на розгляд',
    columns: column1,
    data: generateTableData(3, column1.length),
    isCollapsed: false,
    isVisible: true,
    icons: iconSets.icons1,
  },
  {
    key: 'table2',
    title: 'Мені на виконання',
    columns: column2,
    data: generateTableData(3, column2.length),
    isCollapsed: false,
    isVisible: true,
    icons: iconSets.icons2,
  },
  {
    key: 'table3',
    title: 'Контроль',
    columns: column3,
    data: generateTableData(3, column3.length),
    isCollapsed: false,
    isVisible: true,
    icons: iconSets.icons2,
  },
  {
    key: 'table4',
    title: 'Мені на підпис',
    columns: column4,
    data: generateTableData(3, column4.length),
    isCollapsed: false,
    isVisible: true,
    icons: iconSets.icons3,
  },
  {
    key: 'table5',
    title: 'Мені на візування',
    columns: column5,
    data: generateTableData(3, column5.length),
    isCollapsed: false,
    isVisible: true,
    icons: iconSets.icons3,
  },
  {
    key: 'table6',
    title: 'Для інформації',
    columns: column5,
    data: generateTableData(3, column5.length),
    isCollapsed: false,
    isVisible: true,
    icons: iconSets.icons3,
  },
];
