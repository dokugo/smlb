import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { changePaymentMode } from 'store/salary/actions'
import { PaymentMode } from 'store/salary/types'

import { radioData } from '../constants'
import Radio from '../ui/Radio'
import Tooltip from '../ui/Tooltip'
import { RadioContainer as Container } from './Box'

const RadioContainer: FC<StoreProps> = ({ paymentMode, changePaymentMode }) => {
  const radios = radioData.types.map((item) => {
    const tooltip = item.tooltip ? <Tooltip text={item.tooltip} /> : null

    return (
      <Radio
        key={item.id}
        text={item.text}
        value={item.value}
        name={radioData.name}
        mode={paymentMode}
        changeIsActive={changePaymentMode}
        tooltip={tooltip}
      />
    )
  })

  return <Container>{radios}</Container>
}

const mapStateToProps = (state: RootState): { paymentMode: PaymentMode } => ({
  paymentMode: state.salary.paymentMode,
})

const mapDispatchToProps = { changePaymentMode }

const connector = connect(mapStateToProps, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(RadioContainer)
