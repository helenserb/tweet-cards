export const theme = Object.freeze({
  font: {
    primary: "'Montserrat', sans-serif",
  },
  colors: {
    primary: '#5736a3',
    secondary: '#ebd8ff',
    accent: '#5cd3a8',
    textLight: '#fff',
    textDark: '#373737',
  },

  spacing: (...values) => {
    let value = '';
    for (let i = 0; i < values.length; i += 1) {
      value += `${4 * values[i]}px `;
    }
    return value;
  },

  boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',

  cursor: 'pointer',
});
