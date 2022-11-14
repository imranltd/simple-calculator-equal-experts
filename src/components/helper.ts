export const symbolParse = (s: string) => {
  if (s === '÷') return '/';
  if (s === 'x') return '*';
  return s;
};

export const applyClassName = (string: string | number) => {
  switch (string) {
    case '0':
    case 0:
      return 'zero'
    case '.':
      return 'decimal'
    case '=':
      return 'equals'
    case '+':
      return 'plus'
    case '-':
      return 'minus'
    case '÷':
      return 'divide'

    default:
      return string
  }
}
