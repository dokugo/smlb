import ActionTypes, { Actions } from './actionTypes'
import { minimalSalary } from './constants'
import { Calculated, PaymentMode, SalaryInput } from './types'
import { calculate } from './utils'

interface SalaryState {
  paymentMode: PaymentMode
  withTax: boolean
  salaryInput: SalaryInput
  calculated: Calculated
}

const initState: SalaryState = {
  paymentMode: PaymentMode.Monthly,
  withTax: false,
  salaryInput: '',
  calculated: {
    net: '',
    tax: '',
    cost: '',
  },
}

const salaryReducer = (
  state: SalaryState = initState,
  action: Actions
): SalaryState => {
  switch (action.type) {
    case ActionTypes.SET_SALARY_INPUT: {
      if (state.paymentMode === PaymentMode.Monthly && action.payload) {
        const { net, tax, cost } = calculate(action.payload, state.withTax)
        return {
          ...state,
          salaryInput: action.payload,
          calculated: {
            net,
            tax,
            cost,
          },
        }
      }

      return {
        ...state,
        salaryInput: action.payload,
      }
    }

    case ActionTypes.CHANGE_PAYMENT_MODE: {
      const defaultReturnState: SalaryState = {
        ...state,
        paymentMode: action.payload,
        salaryInput: '',
      }

      switch (action.payload) {
        case PaymentMode.Monthly:
          return {
            ...defaultReturnState,
            calculated: {
              net: '',
              tax: '',
              cost: '',
            },
          }
        case PaymentMode.Minimal:
          return {
            ...defaultReturnState,
            salaryInput: minimalSalary,
          }
        default:
          return {
            ...defaultReturnState,
          }
      }
    }

    case ActionTypes.TOGGLE_WITH_TAX: {
      if (state.paymentMode === PaymentMode.Monthly && state.salaryInput) {
        const { net, tax, cost } = calculate(state.salaryInput, action.payload)
        return {
          ...state,
          withTax: action.payload,
          calculated: {
            net,
            tax,
            cost,
          },
        }
      }

      return {
        ...state,
        withTax: action.payload,
      }
    }

    default:
      return state
  }
}

export default salaryReducer
