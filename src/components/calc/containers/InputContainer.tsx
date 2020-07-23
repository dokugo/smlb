import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { setSalaryInput } from 'store/salary/actions'
import { PaymentMode, SalaryInput } from 'store/salary/types'
import { Transition } from 'utils/transition'

import { inputPlaceholder } from '../constants'
import Input from '../ui/Input'
import { MediumMarginBox as Container } from './Box'

const InputContainer: FC<StoreProps> = ({
  paymentMode,
  salaryInput,
  setSalaryInput,
}) => {
  const isShown = paymentMode !== PaymentMode.Minimal

  return (
    <Transition condition={isShown}>
      <Container>
        <Input
          placeholder={inputPlaceholder}
          paymentMode={paymentMode}
          inputData={salaryInput}
          updateInputData={setSalaryInput}
        />
      </Container>
    </Transition>
  )
}

const mapStateToProps = (
  state: RootState
): {
  paymentMode: PaymentMode
  salaryInput: SalaryInput
} => ({
  paymentMode: state.salary.paymentMode,
  salaryInput: state.salary.salaryInput,
})

const mapDispatchToProps = { setSalaryInput }

const connector = connect(mapStateToProps, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(InputContainer)