import React, { FC } from 'react'
import { PaymentMode } from 'store/salary/types'
import styled from 'styled-components/macro'

interface Props {
  text: string
  name: string
  value: PaymentMode
  isActive: string
  changeIsActive: (value: PaymentMode) => void
  tooltip?: React.ReactNode
}

const RadioComponent: FC<Props> = ({
  text,
  name,
  value,
  changeIsActive,
  isActive,
  tooltip,
}) => {
  const active = isActive === value

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      changeIsActive(value)
    }
  }

  const handleChange = (): void => {
    changeIsActive(value)
  }

  return (
    <Container>
      <Label isActive={active} tabIndex={1} onKeyDown={handleKeyDown}>
        <Radio
          type="radio"
          name={name}
          value={value}
          isActive={active}
          onChange={handleChange}
          tabIndex={-1}
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
`
const Radio = styled.input<{ isActive: boolean }>`
  opacity: 0;
  position: absolute;
  z-index: -1;
`

const Label = styled.label<{ isActive: boolean }>`
  align-items: center;
  box-sizing: border-box;
  color: ${(props): string => props.theme.black};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  position: relative;
  user-select: none;
  &::before {
    border: 0.5px solid ${(props): string => props.theme.grey};
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 14px;
    left: 0;
    margin-right: 10px;
    position: relative;
    top: 0;
    transition: 0.25s ease-in-out;
    width: 14px;
  }
  &::after {
    background: ${(props): string =>
      props.isActive ? props.theme.black : 'none'};
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 8px;
    position: absolute;
    right: calc(100% - 11px);
    top: 5.5px;
    transition: 0.15s ease-in-out;
    width: 8px;
  }
  &:active {
    outline: none;
  }
`
