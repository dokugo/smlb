import { Calculated } from './types'

const stringified = (number: number): string => {
  return String(Math.round(number).toLocaleString('ru'))
}

export const calculate = (salary: number, withTax: boolean): Calculated => {
  const tax = withTax ? (salary / 100) * 13 : salary / 0.87 - salary
  const net = withTax ? salary - tax : salary
  const cost = net + tax

  return {
    net: stringified(net),
    tax: stringified(tax),
    cost: stringified(cost),
  }
}
