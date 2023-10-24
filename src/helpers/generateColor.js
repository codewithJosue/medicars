import colors from '../config/colors';

const theme = [
  '#f2f5ff',
  '#e7eaff',
  '#d2d9ff',
  '#aeb9ff',
  //'#818cff',
  //'#4e55ff',
];
export const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

export const generateThemeColors = () => {
  return theme[Math.floor(Math.random() * theme.length)];
};
