import React, { FC } from 'react'
import styled from 'styled-components/macro'

interface Props {
  label: {
    before: string
    after: string
  }
  isActive: boolean
  toggleIsActive: (isActive: boolean) => void
}

const SwitchComponent: FC<Props> = ({ label, isActive, toggleIsActive }) => {
  const handleChange = (): void => toggleIsActive(!isActive)

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') toggleIsActive(!isActive)
  }

  return (
    <Label>
      <LabelAside isActive={!isActive}>{label.before}</LabelAside>
      <SwitchBox>
        <Switch
          type="checkbox"
          isActive={!isActive}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </SwitchBox>
      <LabelAside isActive={isActive}>{label.after}</LabelAside>
    </Label>
  )
}

export default SwitchComponent

export const Label = styled.label`
  color: ${(props): string => props.theme.grey};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
  user-select: none;
  width: fit-content;
`

const LabelAside = styled.span<{ isActive: boolean }>`
  color: ${(props): string => (props.isActive ? 'inherit' : props.theme.black)};
  font-weight: 700;
  transition: 0.15s ease-in-out;
`

const SwitchBox = styled.div`
  width: 55px;
`

const Switch = styled.input<{ isActive: boolean }>`
  cursor: pointer;
  display: block;
  height: 0;
  margin: 0;
  margin-left: 10px;
  position: relative;
  width: 0;
  &::before {
    background: ${(props): string =>
      props.isActive ? props.theme.orange : props.theme.lightgrey};
    border-radius: 20px;
    content: '';
    display: block;
    height: 20px;
    left: 0;
    position: relative;
    top: 0;
    transition: 0.3s ease-in-out;
    width: 35px;
  }
  &::after {
    background: ${(props): string => props.theme.white};
    border-radius: 50%;
    content: '';
    display: block;
    height: 16px;
    left: ${(props): string => (props.isActive ? '17px' : '2px')};
    position: absolute;
    top: 2px;
    transition: 0.3s ease-in-out;
    width: 16px;
  }
  &:active::after {
    left: ${(props): string => (props.isActive ? '15px' : '2px')};
    width: 18px;
  }
`
