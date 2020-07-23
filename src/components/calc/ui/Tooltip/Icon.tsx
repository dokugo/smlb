import React, { FC, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'

type ToggleFunction = (toggle: boolean | ((toggle: boolean) => boolean)) => void

interface Props {
  clicked: boolean
  toggleClick: ToggleFunction
  toggleHover: ToggleFunction
}

const IconComponent: FC<Props> = ({ clicked, toggleClick, toggleHover }) => {
  const icon = useRef<HTMLSpanElement>(null)

  const handleMouseOver = (): void => toggleHover((iconHovered) => !iconHovered)

  const handleMouseOut = (): void => toggleHover((iconHovered) => !iconHovered)

  const handleInsideClick = (): void => toggleClick((clicked) => !clicked)

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') toggleClick((clicked) => !clicked)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const { classList } = event.target as HTMLElement

      if (icon?.current?.contains(event.target as Node)) return
      if (classList.contains('Tooltip')) return
      if (classList.contains('Icon')) return

      toggleClick(false)
    }

    const handleOutsideKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') toggleClick(false)
    }

    if (clicked) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleOutsideKey)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleOutsideKey)
    }

    return (): void => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleOutsideKey)
    }
  }, [clicked, toggleClick])

  return (
    <Icon
      className="Icon"
      isActive={clicked}
      onClick={handleInsideClick}
      onKeyDown={handleKeyDown}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      ref={icon}
    >
      {clicked ? '✖' : 'i'}
    </Icon>
  )
}

export default IconComponent

const Icon = styled.span<{ isActive: boolean }>`
  align-items: center;
  border: 1px solid ${({ theme }): string => theme.colors.grey};
  border-radius: 10px;
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.grey};
  cursor: pointer;
  display: flex;
  font-size: ${({ isActive }): string => (isActive ? '10px' : '12px')};
  font-weight: 700;
  height: 20px;
  justify-content: center;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
  user-select: none;
  width: 20px;
  &:hover {
    border-color: ${({ theme }): string => theme.colors.darkblue};
    color: ${({ theme }): string => theme.colors.darkblue};
  }
`
