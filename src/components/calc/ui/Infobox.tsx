import React, { FC } from 'react'
import { Calculated, InfoboxData } from 'store/salary/types'
import styled from 'styled-components/macro'

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
  calculated: Calculated
}

const Infobox: FC<Infobox> = ({ infoboxData, calculated }) => {
  const rows = infoboxData.map((item) => {
    const amount = calculated[item.type]
    return <RowElement key={item.id} amount={amount} text={item.text} />
  })

  return <List>{rows}</List>
}

export default Infobox

const List = styled.section`
  background: ${({ theme }): string => theme.colors.lightyellow};
  color: ${({ theme }): string => theme.colors.black};
  display: flex;
  flex-direction: column;
  font-weight: 400;
  max-width: fit-content;
  min-width: max-content;
  padding: 25px 30px;
  @media only screen and (max-width: 600px) {
    min-width: unset;
  }
`

const Row = styled.span`
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 360px) {
    margin-bottom: 12px;
  }
`

const Amount = styled.span`
  font-weight: 700;
`
