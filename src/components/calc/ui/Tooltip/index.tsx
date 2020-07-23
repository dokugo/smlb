import React, { FC, useState } from 'react'
import styled from 'styled-components/macro'

import Icon from './Icon'
import Tooltip from './Tooltip'

interface Props {
  text: string
}

const TooltipContainer: FC<Props> = ({ text }) => {
  const [clicked, toggleClick] = useState(false)
  const [hovered, toggleHover] = useState(false)

  return (
    <Container>
      <Icon
        clicked={clicked}
        toggleClick={toggleClick}
        toggleHover={toggleHover}
      />
      <Tooltip text={text} clicked={clicked} hovered={hovered} />
    </Container>
  )
}

export default TooltipContainer

const Container = styled.section`
  align-items: center;
  display: flex;
  height: 20px;
  margin-left: 10px;
  position: relative;
`
