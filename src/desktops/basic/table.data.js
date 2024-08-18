import { v4 as uuidv4 } from 'uuid';
import {
  faCheck,
  faFilter,
  faPlus,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';
import { generateTableData } from './basic.utils';

const column1 = [
  { id: uuidv4(), text: 'Реєстраційний номер' },
  { id: uuidv4(), text: 'Реєстраційна дата' },
  { id: uuidv4(), text: 'На розгляді' },
  { id: uuidv4(), text: 'Короткий зміст' },
  { id: uuidv4(), text: 'Кореспондент' },
  { id: uuidv4(), text: 'Строк' },
  { id: uuidv4(), text: 'Вид документа' },
  { id: uuidv4(), text: 'Стан' },
];

const column2 = [
  { id: uuidv4(), text: 'Виконавець' },
  { id: uuidv4(), text: 'Роль' },
  { id: uuidv4(), text: 'Текст пункту' },
  { id: uuidv4(), text: 'Строк' },
  { id: uuidv4(), text: 'Документ' },
  { id: uuidv4(), text: 'Вид документа' },
  { id: uuidv4(), text: 'Кореспондент' },
  { id: uuidv4(), text: 'Зміст' },
  { id: uuidv4(), text: 'Стан' },
];

const column3 = [
  { id: uuidv4(), text: 'Підписант' },
  { id: uuidv4(), text: 'Текст завдання' },
  { id: uuidv4(), text: 'Строк' },
  { id: uuidv4(), text: 'Документ' },
  { id: uuidv4(), text: 'Вид документа' },
  { id: uuidv4(), text: 'Зміст' },
];

const column4 = [
  { id: uuidv4(), text: 'Кому' },
  { id: uuidv4(), text: 'Вид' },
  { id: uuidv4(), text: 'Системний номер' },
  { id: uuidv4(), text: 'Вид документа' },
  { id: uuidv4(), text: 'Зміст' },
  { id: uuidv4(), text: 'Дата створення' },
  { id: uuidv4(), text: 'Створив' },
  { id: uuidv4(), text: 'Строк' },
];

const column5 = [
  { id: uuidv4(), text: 'Виконавець' },
  { id: uuidv4(), text: 'Роль' },
  { id: uuidv4(), text: 'Текст пункту' },
  { id: uuidv4(), text: 'Строк' },
  { id: uuidv4(), text: 'Реєстраційний номер' },
  { id: uuidv4(), text: 'Реєстраційна дата' },
  { id: uuidv4(), text: 'Вид документа' },
  { id: uuidv4(), text: 'Кореспондент' },
  { id: uuidv4(), text: 'Зміст' },
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
