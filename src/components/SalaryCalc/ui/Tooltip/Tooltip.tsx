import React, { FC } from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components/macro'
import { TransitionContainer } from 'utils/style'

interface Props {
  text: string
  iconClicked: boolean
  iconHovered: boolean
}

const TooltipComponent: FC<Props> = ({ text, iconClicked, iconHovered }) => {
  const animate = iconHovered
    ? !iconHovered
    : !iconClicked
    ? !iconClicked
    : false

  const animatedTooltip = (transition: string): React.ReactNode => {
    return (
      <Tooltip transition={transition} className="Tooltip">
        {text}
      </Tooltip>
    )
  }

  return (
    <Transition in={animate} timeout={1000}>
      {animatedTooltip}
    </Transition>
  )
}

export default TooltipComponent

const Tooltip = styled(TransitionContainer)`
  background: ${(props): string => props.theme.darkblue};
  box-shadow: 0 16px 48px 0 ${(props): string => props.theme.shadow};
  box-sizing: border-box;
  color: ${(props): string => props.theme.white};
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
    border-bottom: 12px solid ${(props): string => props.theme.darkblue};
    border-right: 12px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -12px;
    width: 0;
  }
`
