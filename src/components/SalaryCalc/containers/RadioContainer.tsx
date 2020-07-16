import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { changePaymentMode } from 'store/salary/actions'
import { PaymentMode } from 'store/salary/types'

import Radio from '../ui/Radio'

interface ComponentProps {
  text: string
  name: string
  value: PaymentMode
  tooltip?: React.ReactNode
}

type Props = StoreProps & ComponentProps

const RadioContainer: FC<Props> = ({
  text,
  name,
  value,
  changePaymentMode,
  paymentMode,
  tooltip,
}) => (
  <Radio
    text={text}
    name={name}
    value={value}
    isActive={paymentMode}
    changeIsActive={changePaymentMode}
    tooltip={tooltip}
  />
)

const mapStateToProps = (state: RootState): { paymentMode: PaymentMode } => ({
  paymentMode: state.salary.paymentMode,
})

const mapDispatchToProps = { changePaymentMode }

const connector = connect(mapStateToProps, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(RadioContainer)
