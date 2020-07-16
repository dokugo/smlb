import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { setSalaryInput } from 'store/salary/actions'
import { InputPlaceholder, PaymentMode, SalaryInput } from 'store/salary/types'

import Input from '../ui/Input'

interface ComponentProps {
  placeholder: InputPlaceholder
}

type Props = StoreProps & ComponentProps

const InputContainer: FC<Props> = ({
  placeholder,
  paymentMode,
  salaryInput,
  setSalaryInput,
}) => (
  <Input
    paymentMode={paymentMode}
    placeholder={placeholder}
    inputData={salaryInput}
    updateInputData={setSalaryInput}
  />
)

const mapStateToProps = (
  state: RootState
): { paymentMode: PaymentMode; salaryInput: SalaryInput } => ({
  paymentMode: state.salary.paymentMode,
  salaryInput: state.salary.salaryInput,
})

const mapDispatchToProps = { setSalaryInput }

const connector = connect(mapStateToProps, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(InputContainer)
