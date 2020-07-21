import React, { FC } from 'react'
import styled from 'styled-components/macro'

import InfoboxContainer from './containers/InfoboxContainer'
import InputContainer from './containers/InputContainer'
import RadioContainer from './containers/RadioContainer'
import SwitchContainer from './containers/SwitchContainer'
import Title from './ui/Title'

const SalaryForm: FC = () => {
  return (
    <FormContainer>
      <Title />
      <RadioContainer />
      <SwitchContainer />
      <InputContainer />
      <InfoboxContainer />
    </FormContainer>
  )
}

export default SalaryForm

const FormContainer = styled.section`
  padding: 50px;
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`
