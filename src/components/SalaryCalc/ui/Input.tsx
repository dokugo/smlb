import React, { FC } from 'react'
import { InputPlaceholder, PaymentMode, SalaryInput } from 'store/salary/types'
import styled from 'styled-components/macro'

interface Props {
  placeholder: InputPlaceholder
  paymentMode: PaymentMode
  inputData: SalaryInput
  updateInputData: (input: number | '') => void
}

const InputComponent: FC<Props> = ({
  placeholder,
  paymentMode,
  inputData,
  updateInputData,
}) => {
  const inputDataString = inputData?.toLocaleString('ru')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.validity.valid) return

    const cleanString = event.target.value.replace(/\s+/g, '')

    if (cleanString.length > 13) return

    const payload = Number(cleanString) || ''

    updateInputData(payload)
  }

  return (
    <section>
      <Label>
        <Input
          onChange={handleChange}
          type="text"
          placeholder={placeholder.field}
          value={inputDataString}
          pattern="[0-9\s]*"
        />
        <Currency>{placeholder.label[paymentMode]}</Currency>
      </Label>
    </section>
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
const Input = styled.input`
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
  padding: 0 12px;
  transition: 0.15s ease-in-out;
  width: 240px;
  &:focus {
    box-shadow: 0 0 0 1px ${(props): string => props.theme.black};
    outline: 0;
  }
  &::placeholder {
    color: ${(props): string => props.theme.grey};
    font-size: 14px;
  }
  @media only screen and (max-width: 405px) {
    font-size: 14px;
  }
`
const Currency = styled.span`
  color: ${(props): string => props.theme.black};
  font-size: 17px;
  font-weight: 700;
  padding: 0 10px;
  user-select: none;
`
