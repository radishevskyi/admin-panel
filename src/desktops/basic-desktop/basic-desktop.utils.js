export const generateTableData = (rows, columns) => {
  return Array.from({ length: rows }, (_, rowIndex) => {
    return Array.from({ length: columns }, (_, colIndex) => {
      const id = `${rowIndex}-${colIndex}`;
      const text = `Ряд ${rowIndex + 1} Кол ${colIndex + 1}`;
      return { id, text };
    });
  });
};
