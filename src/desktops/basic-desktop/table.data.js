import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const column1 = [
  <input type='checkbox' />,
  <FontAwesomeIcon icon={faArrowUp} />,
  'Реєстраційний номер',
  'Реєстраційна дата',
  'На розгляді',
  'Короткий зміст',
  'Кореспондент',
  'Строк',
  'Вид документа',
  'Стан',
];

const column2 = [
  <FontAwesomeIcon icon={faArrowUp} />,
  'Виконавець',
  'Роль',
  'Текст пункту',
  'Строк',
  'Документ',
  'Вид документа',
  'Кореспондент',
  'Зміст',
  'Стан',
];

const column3 = [
  <FontAwesomeIcon icon={faArrowUp} />,
  'Підписант',
  'Текст завдання',
  'Строк',
  'Документ',
  'Вид документа',
  'Зміст',
];

const column4 = [
  <input type='checkbox' />,
  <FontAwesomeIcon icon={faArrowUp} />,
  'Кому',
  'Вид',
  'Системний номер',
  'Вид документа',
  'Зміст',
  'Дата створення',
  'Створив',
  'Строк',
];

const column5 = [
  <FontAwesomeIcon icon={faArrowUp} />,
  'Виконавець',
  'Роль',
  'Текст пункту',
  'Строк',
  'Реєстраційний номер',
  'Реєстраційна дата',
  'Вид документа',
  'Кореспондент',
  'Зміст',
];

export { column1, column2, column3, column4, column5 };
