import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { Calculated, PaymentMode } from 'store/salary/types'

import { infoboxData } from '../constants'
import Infobox from '../ui/Infobox'

type Props = StoreProps

const InfoboxContainer: FC<Props> = ({ paymentMode, calculated }) => {
  return (
    <Infobox
      infoboxData={infoboxData}
      paymentMode={paymentMode}
      calculated={calculated}
    />
  )
}

const mapStateToProps = (
  state: RootState
): { paymentMode: PaymentMode; calculated: Calculated } => ({
  paymentMode: state.salary.paymentMode,
  calculated: state.salary.calculated,
})

const connector = connect(mapStateToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(InfoboxContainer)
