import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { toggleWithTax } from 'store/salary/actions'
import { PaymentMode } from 'store/salary/types'

import { switchLabel } from '../constants'
import Switch from '../ui/Switch'
import { Box as Container } from './Box'

const SwitchContainer: FC<StoreProps> = ({
  paymentMode,
  withTax,
  toggleWithTax,
}) => {
  const isShown = paymentMode !== PaymentMode.Minimal

  if (isShown) {
    return (
      <Container>
        <Switch
          label={switchLabel}
          isActive={withTax}
          toggleIsActive={toggleWithTax}
        />
      </Container>
    )
  } else return null
}

const mapStateToProps = (
  state: RootState
): {
  paymentMode: PaymentMode
  withTax: boolean
} => ({
  paymentMode: state.salary.paymentMode,
  withTax: state.salary.withTax,
})

const mapDispatchToProps = { toggleWithTax }

const connector = connect(mapStateToProps, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(SwitchContainer)
