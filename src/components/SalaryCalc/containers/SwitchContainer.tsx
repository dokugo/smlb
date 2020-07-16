import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { toggleWithTax } from 'store/salary/actions'

import Switch from '../ui/Switch'

interface ComponentProps {
  label: {
    before: string
    after: string
  }
}

type Props = StoreProps & ComponentProps

const SwitchContainer: FC<Props> = ({ label, withTax, toggleWithTax }) => (
  <Switch label={label} isActive={withTax} toggleIsActive={toggleWithTax} />
)

const mapStateToProps = (state: RootState): { withTax: boolean } => ({
  withTax: state.salary.withTax,
})

const mapDispatchToProps = { toggleWithTax }

const connector = connect(mapStateToProps, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(SwitchContainer)
