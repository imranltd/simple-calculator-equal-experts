export const symbolParse = (s: string) => {
  if (s === '÷') return '/';
  if (s === 'x') return '*';
  return s;
};
//eslint-disable-next-line
export const evaluateSum = (rtValue: string[]) => (Function(
  'return ' + rtValue.map((v) => symbolParse(v)).join('')
));


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
