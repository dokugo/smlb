import React, { FC } from 'react'
import { PaymentMode } from 'store/salary/types'
import styled from 'styled-components/macro'

interface Props {
  text: string
  value: PaymentMode
  name: string
  mode: string
  changeIsActive: (value: PaymentMode) => void
  tooltip?: React.ReactNode
}

const RadioComponent: FC<Props> = ({
  text,
  value,
  name,
  mode,
  changeIsActive,
  tooltip,
}) => {
  const isActive = mode === value

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      changeIsActive(value)
    }
  }

  const handleClick = (): void => changeIsActive(value)

  return (
    <Container>
      <Label
        isActive={isActive}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        <Radio
          value={value}
          name={name}
          isActive={isActive}
          tabIndex={-1}
          type="radio"
        />
        {text}
      </Label>
      {tooltip}
    </Container>
  )
}

export default RadioComponent

const Container = styled.section`
  display: flex;
  height: 20px;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`
const Radio = styled.input<{ isActive: boolean }>`
  opacity: 0;
  position: absolute;
  z-index: -1;
`

const Label = styled.label<{ isActive: boolean }>`
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.black};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  position: relative;
  user-select: none;
  &::before {
    border: 0.5px solid ${({ theme }): string => theme.colors.grey};
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 14px;
    left: 0;
    margin-right: 10px;
    position: relative;
    top: 0;
    transition-duration: ${({ theme }): string => theme.animation.fast};
    transition-timing-function: ${({ theme }): string => theme.animation.func};
    width: 14px;
  }
  &::after {
    background: ${({ theme, isActive }): string =>
      isActive ? theme.colors.black : 'none'};
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 8px;
    position: absolute;
    right: calc(100% - 11px);
    top: 6px;
    transition-duration: ${({ theme }): string => theme.animation.fast};
    transition-timing-function: ${({ theme }): string => theme.animation.func};
    width: 8px;
  }
  &:active {
    outline: none;
  }
`
