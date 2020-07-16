import React, { FC, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'

interface Props {
  iconClicked: boolean
  iconHovered: boolean
  toggleIconClicked: (toggle: boolean) => void
  toggleIconHovered: (toggle: boolean) => void
}

const IconComponent: FC<Props> = ({
  iconClicked,
  iconHovered,
  toggleIconClicked,
  toggleIconHovered,
}) => {
  const icon = useRef<HTMLSpanElement>(null)

  const handleMouseOver = (): void => toggleIconHovered(!iconHovered)

  const handleMouseOut = (): void => toggleIconHovered(!iconHovered)

  const handleInsideClick = (): void => toggleIconClicked(!iconClicked)

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      toggleIconClicked(!iconClicked)
    }
  }
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const { classList } = event.target as HTMLElement

      if (icon?.current?.contains(event.target as Node)) return
      if (classList.contains('Tooltip')) return
      if (classList.contains('Icon')) return

      toggleIconClicked(false)
    }

    const handleOutsideKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        toggleIconClicked(false)
      }
    }

    if (iconClicked) {
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
  }, [iconClicked, toggleIconClicked])

  return (
    <Icon
      className="Icon"
      active={iconClicked}
      onClick={handleInsideClick}
      onKeyDown={handleKeyDown}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      ref={icon}
    >
      {iconClicked ? '✖' : 'i'}
    </Icon>
  )
}

export default IconComponent

const Icon = styled.span<{ active: boolean }>`
  align-items: center;
  border: 1px solid ${(props): string => props.theme.grey};
  border-radius: 10px;
  box-sizing: border-box;
  color: ${(props): string => props.theme.grey};
  cursor: pointer;
  display: flex;
  font-size: ${(props): string => (props.active ? '10px' : '12px')};
  font-weight: 700;
  height: 20px;
  justify-content: center;
  transition: 0.15s ease-in-out;
  user-select: none;
  width: 20px;
  &:hover {
    border-color: ${(props): string => props.theme.darkblue};
    color: ${(props): string => props.theme.darkblue};
  }
`
