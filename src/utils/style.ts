import styled from 'styled-components/macro'

export const TransitionContainer = styled.section<{ transition: string }>`
  opacity: ${({ transition }): number =>
    transition === 'entering'
      ? 0
      : transition === 'entered'
      ? 0
      : transition === 'exiting'
      ? 1
      : transition === 'exited'
      ? 1
      : 0};
  transition: 0.15s ease-in-out;
  z-index: ${({ transition }): string =>
    transition === 'entering'
      ? '-1'
      : transition === 'entered'
      ? '-1'
      : transition === 'exiting'
      ? '42'
      : transition === 'exited'
      ? '42'
      : '-1'};
`
