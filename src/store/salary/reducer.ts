import ActionTypes, { Actions } from './actionTypes'
import { Calculated, PaymentMode, SalaryInput } from './types'
import { calculate } from './utils'

interface State {
  paymentMode: PaymentMode
  withTax: boolean
  salaryInput: SalaryInput
  calculated: Calculated
}

const initState: State = {
  paymentMode: PaymentMode.Monthly,
  withTax: false,
  salaryInput: '',
  calculated: {
    net: '',
    tax: '',
    cost: '',
  },
}

const reducer = (state: State = initState, action: Actions): State => {
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
        calculated: {
          net: '',
          tax: '',
          cost: '',
        },
      }
    }

    case ActionTypes.CHANGE_PAYMENT_MODE: {
      if (action.payload === PaymentMode.Monthly) {
        return {
          ...state,
          paymentMode: action.payload,
          salaryInput: '',
          calculated: {
            net: '',
            tax: '',
            cost: '',
          },
        }
      }

      return {
        ...state,
        paymentMode: action.payload,
        salaryInput: '',
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

export default reducer
