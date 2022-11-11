import {symbolParse, applyClassName} from './helper'

test('simpleParse', () => {
  expect(symbolParse('÷')).toBe('/');
  expect(symbolParse('x')).toBe('*');
  expect(symbolParse('+')).toBe('+');
  expect(symbolParse('-')).toBe('-');
  expect(symbolParse('something')).toBe('something');
});


test('applyClassName', () => {
  expect(applyClassName('0')).toBe('zero');
  expect(applyClassName('÷')).toBe('divide');
  expect(applyClassName('x')).toBe('x');
  expect(applyClassName('+')).toBe('plus');
  expect(applyClassName('-')).toBe('minus');
  expect(applyClassName('something')).toBe('something');
});
