import React, { FC } from 'react'
import { Transition } from 'react-transition-group'
import { Calculated, InfoboxData, PaymentMode } from 'store/salary/types'
import styled from 'styled-components/macro'
import { TransitionContainer } from 'utils/style'

interface RowElementProps {
  amount: string
  text: string
}

const RowElement: FC<RowElementProps> = ({ amount, text }) => {
  return (
    <Row>
      <Amount>{amount} ₽ </Amount>
      <span>{text}</span>
    </Row>
  )
}

interface Infobox {
  infoboxData: InfoboxData[]
  paymentMode: PaymentMode
  calculated: Calculated
}

const Infobox: FC<Infobox> = ({ infoboxData, paymentMode, calculated }) => {
  const { net, tax, cost } = calculated

  const animate = paymentMode !== 'monthly' || !net || !tax || !cost

  const rows = infoboxData.map((item) => {
    const amount = calculated[item.type]
    return <RowElement key={item.id} amount={amount} text={item.text} />
  })

  const animatedInfobox = (transition: string): React.ReactNode => {
    return <Container transition={transition}>{rows}</Container>
  }

  return (
    <Transition in={animate} timeout={1000}>
      {animatedInfobox}
    </Transition>
  )
}

export default Infobox

const Container = styled(TransitionContainer)`
  background: ${(props): string => props.theme.lightyellow};
  color: ${(props): string => props.theme.black};
  display: flex;
  flex-direction: column;
  font-weight: 400;
  max-width: fit-content;
  padding: 25px 30px;
`

const Row = styled.span`
  margin-bottom: 5px;
`

const Amount = styled.span`
  font-weight: 700;
`
