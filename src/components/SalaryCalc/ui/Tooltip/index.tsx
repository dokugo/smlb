import React, { FC, useState } from 'react'
import styled from 'styled-components/macro'

import Icon from './Icon'
import Tooltip from './Tooltip'

interface Props {
  text: string
}

const TooltipContainer: FC<Props> = ({ text }) => {
  const [iconClicked, toggleIconClicked] = useState(false)
  const [iconHovered, toggleIconHovered] = useState(false)

  return (
    <Container>
      <Icon
        iconClicked={iconClicked}
        iconHovered={iconHovered}
        toggleIconClicked={toggleIconClicked}
        toggleIconHovered={toggleIconHovered}
      />
      <Tooltip
        text={text}
        iconClicked={iconClicked}
        iconHovered={iconHovered}
      />
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
