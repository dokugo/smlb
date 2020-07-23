import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { Calculated, PaymentMode } from 'store/salary/types'
import { Transition } from 'utils/transition'

import { infoboxData } from '../constants'
import Infobox from '../ui/Infobox'
import { LargeMarginBox as Container } from './Box'

type Props = StoreProps

const InfoboxContainer: FC<Props> = ({ paymentMode, calculated }) => {
  const { net, tax, cost } = calculated

  const isHidden = paymentMode !== PaymentMode.Monthly || !net || !tax || !cost

  return (
    <Transition condition={!isHidden}>
      <Container>
        <Infobox infoboxData={infoboxData} calculated={calculated} />
      </Container>
    </Transition>
  )
}

const mapStateToProps = (
  state: RootState
): {
  paymentMode: PaymentMode
  calculated: Calculated
} => ({
  paymentMode: state.salary.paymentMode,
  calculated: state.salary.calculated,
})

const connector = connect(mapStateToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(InfoboxContainer)