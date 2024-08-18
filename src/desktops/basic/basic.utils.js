import { v4 as uuidv4 } from 'uuid';

export const generateTableData = (rows, columns) => {
  return Array.from({ length: rows }, (_, rowIndex) => {
    const id = uuidv4();
    const rowData = Array.from({ length: columns }, (_, colIndex) => {
      const text = `Рядок ${rowIndex + 1} Колонка ${colIndex + 1}`;
      return { id: uuidv4(), text };
    });
    return { id, rowData };
  });
};
