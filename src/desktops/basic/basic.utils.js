import {
  column1,
  column2,
  column3,
  column4,
  column5,
  iconSets,
} from './table.data';

export const generateTableData = (rows, columns) => {
  return Array.from({ length: rows }, (_, rowIndex) => {
    return Array.from({ length: columns }, (_, colIndex) => {
      const id = `${rowIndex}-${colIndex}`;
      const text = `Рядок ${rowIndex + 1} Колонка ${colIndex + 1}`;
      return { id, text };
    });
  });
};

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
