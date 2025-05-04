export const getDate = () => {
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");
  const year = new Date().getFullYear();
  return `${year}-${month}-${day}`;
};
