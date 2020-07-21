import React, { FC } from 'react'
import TransitionUtil from 'react-transition-group/Transition'
import styled from 'styled-components/macro'
import { transitionTime } from 'theme'

const AnimatedBox = styled.section<{ transition: string }>`
  opacity: ${({ transition }): number =>
    transition === 'entering'
      ? 0
      : transition === 'entered'
      ? 1
      : transition === 'exiting'
      ? 0
      : transition === 'exited'
      ? 0
      : 0};
  transition: ${transitionTime}ms ease-in-out;
  z-index: ${({ transition }): string =>
    transition === 'entering'
      ? '42'
      : transition === 'entered'
      ? '42'
      : transition === 'exiting'
      ? '-1'
      : transition === 'exited'
      ? '-1'
      : '-1'};
`

interface Props {
  condition: boolean
  children: React.ReactChild
}

export const Transition: FC<Props> = ({ condition, children }) => (
  <TransitionUtil
    in={condition}
    timeout={{ enter: 0, exit: transitionTime }}
    unmountOnExit
    mountOnEnter
  >
    {(transition: string): React.ReactNode => (
      <AnimatedBox transition={transition}>{children}</AnimatedBox>
    )}
  </TransitionUtil>
)
