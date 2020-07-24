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
  color: ${({ theme }): string => theme.colors.grey};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
  min-width: max-content;
  user-select: none;
  width: fit-content;
`

const LabelAside = styled.span<{ isActive: boolean }>`
  color: ${({ theme, isActive }): string =>
    isActive ? 'inherit' : theme.colors.black};
  font-weight: 700;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
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
    background: ${({ theme, isActive }): string =>
      isActive ? theme.colors.orange : theme.colors.lightgrey};
    border-radius: 20px;
    content: '';
    display: block;
    height: 20px;
    left: 0;
    position: relative;
    top: 0;
    transition-duration: ${({ theme }): string => theme.animation.mild};
    transition-timing-function: ${({ theme }): string => theme.animation.func};
    width: 35px;
  }
  &::after {
    background: ${({ theme }): string => theme.colors.white};
    border-radius: 50%;
    content: '';
    display: block;
    height: 16px;
    left: ${({ isActive }): string => (isActive ? '17px' : '2px')};
    position: absolute;
    top: 2px;
    transition-duration: ${({ theme }): string => theme.animation.mild};
    transition-timing-function: ${({ theme }): string => theme.animation.func};
    width: 16px;
  }
  &:active::after {
    left: ${({ isActive }): string => (isActive ? '15px' : '2px')};
    width: 18px;
  }
`
