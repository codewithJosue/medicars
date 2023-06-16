export const getDate = date => {
  return `${getDay(date)}/${getMonth(date)}/${getYear(date)}`;
};

export const getDay = date => {
  return date.getDate();
};

export const getMonth = date => {
  return date.getMonth();
};

export const getYear = date => {
  return date.getFullYear();
};
