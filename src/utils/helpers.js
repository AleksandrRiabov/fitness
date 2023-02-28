export const capitalize = str => {
  return str.split('').slice(0, 1).join('').toUpperCase() + str.split('').slice(1).join('');
}