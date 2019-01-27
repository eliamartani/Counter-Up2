import { decimalPlaces, divideNumbers, hasComma, isFloat } from './index'

test('divideNumbers', () => {
  const nums = divideNumbers('100')
  expect(nums).toEqual(expect.arrayContaining([ '100' ]))
  expect(nums[ nums.length - 1 ]).toBe('100')
  expect(nums[ 0 ]).toBe('')
})

test('hasComma', () => {
  const num1 = '99,99'
  const num2 = '99.99'
  const num3 = '100'

  expect(hasComma(num1)).toBeTruthy()
  expect(hasComma(num2)).toBeFalsy()
  expect(hasComma(num3)).toBeFalsy()
})

test('isFloat', () => {
  const num1 = '99.99'
  const num2 = '99,99'
  const num3 = '100'

  expect(isFloat(num1)).toBeTruthy()
  expect(isFloat(num2)).toBeFalsy()
  expect(isFloat(num3)).toBeFalsy()
})

test('decimalPlaces', () => {
  const num1 = '99.99'
  const num2 = '99,99'
  const num3 = '99'

  expect(decimalPlaces(num1)).toBe(2)
  expect(decimalPlaces(num2)).toBe(0)
  expect(decimalPlaces(num3)).toBe(0)
})