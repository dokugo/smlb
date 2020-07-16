import { PaymentMode, SalaryInput } from './types'

enum ActionTypes {
  SET_SALARY_INPUT = 'SET_SALARY_INPUT',
  CHANGE_PAYMENT_MODE = 'CHANGE_PAYMENT_MODE',
  TOGGLE_WITH_TAX = 'TOGGLE_WITH_TAX',
}

type setSalaryInput = {
  type: typeof ActionTypes.SET_SALARY_INPUT
  payload: SalaryInput
}

type ChangePaymentMode = {
  type: typeof ActionTypes.CHANGE_PAYMENT_MODE
  payload: PaymentMode
}

type ChangeWithTax = {
  type: typeof ActionTypes.TOGGLE_WITH_TAX
  payload: boolean
}

export default ActionTypes

export type Actions = setSalaryInput | ChangePaymentMode | ChangeWithTax
