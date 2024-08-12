export const generateTableData = (rows, columns) => {
  return Array.from({ length: rows }, (_, rowIndex) => {
    return Array.from({ length: columns }, (_, colIndex) => {
      const id = `${rowIndex}-${colIndex}`;
      const text = `Рядок ${rowIndex + 1} Колонка ${colIndex + 1}`;
      return { id, text };
    });
  });
};
