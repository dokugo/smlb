import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { Transition } from 'utils/transition'

interface Props {
  text: string
  iconClicked: boolean
  iconHovered: boolean
}

const TooltipComponent: FC<Props> = ({ text, iconClicked, iconHovered }) => {
  const isShown = iconHovered ? iconHovered : iconClicked ? iconClicked : false

  return (
    <Transition condition={isShown}>
      <Tooltip className="Tooltip">{text}</Tooltip>
    </Transition>
  )
}

export default TooltipComponent

const Tooltip = styled.section`
  background: ${({ theme }): string => theme.colors.darkblue};
  box-shadow: 0 16px 48px 0 ${({ theme }): string => theme.colors.shadow};
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.white};
  display: block;
  font-size: 12px;
  font-weight: 500;
  left: 10px;
  letter-spacing: 0.33px;
  margin: 0;
  padding: 20px 15px;
  position: absolute;
  top: 36px;
  width: 220px;
  &::before {
    border-bottom: 12px solid ${({ theme }): string => theme.colors.darkblue};
    border-right: 12px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -12px;
    width: 0;
  }
  @media only screen and (max-width: 360px) {
    max-width: 180px;
  }
`
