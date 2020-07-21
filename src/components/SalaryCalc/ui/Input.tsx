import React, { FC } from 'react'
import NumberFormat from 'react-number-format'
import { InputPlaceholder, PaymentMode, SalaryInput } from 'store/salary/types'
import styled from 'styled-components/macro'

interface Props {
  placeholder: InputPlaceholder
  paymentMode: PaymentMode
  inputData: SalaryInput
  updateInputData: (input: SalaryInput) => void
}

const InputComponent: FC<Props> = ({
  placeholder,
  paymentMode,
  inputData,
  updateInputData,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.validity.valid) return

    const stringWithoutSpaces = event.target.value.replace(/\s+/g, '')
    const payload = Number(stringWithoutSpaces) || ''
    if (payload === inputData) return

    updateInputData(payload)
  }

  return (
    <Label>
      <Input
        onChange={handleChange}
        type="text"
        pattern="[0-9\s]*"
        thousandSeparator={' '}
        maxLength={15}
        placeholder={placeholder.field}
        value={inputData}
      />
      <Currency>{placeholder.label[paymentMode]}</Currency>
    </Label>
  )
}

export default InputComponent

const Label = styled.label`
  align-items: center;
  display: flex;
  margin: 0;
  position: relative;
  width: 100%;
`

const Input = styled(NumberFormat)`
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 0 1px ${(props): string => props.theme.grey};
  box-sizing: border-box;
  color: ${(props): string => props.theme.black};
  display: block;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  transition: 0.15s ease-in-out;
  width: 155px;
  &:focus {
    box-shadow: 0 0 0 1px ${(props): string => props.theme.black};
    outline: 0;
  }
  &::placeholder {
    color: ${(props): string => props.theme.grey};
    font-size: 14px;
  }
`

const Currency = styled.span`
  color: ${(props): string => props.theme.black};
  font-size: 17px;
  font-weight: 700;
  padding: 0 10px;
  transition: 0.15s ease-in-out;
  user-select: none;
`
