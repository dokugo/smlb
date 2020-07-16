import ActionTypes, { Actions } from './actionTypes'
import { PaymentMode, SalaryInput } from './types'

export const setSalaryInput = (input: SalaryInput): Actions => {
  return { type: ActionTypes.SET_SALARY_INPUT, payload: input }
}

export const changePaymentMode = (paymentMode: PaymentMode): Actions => {
  return { type: ActionTypes.CHANGE_PAYMENT_MODE, payload: paymentMode }
}

export const toggleWithTax = (withTax: boolean): Actions => {
  return { type: ActionTypes.TOGGLE_WITH_TAX, payload: withTax }
}
