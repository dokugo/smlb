import React, { FC } from 'react'
import styled from 'styled-components/macro'

import { inputPlaceholder, radioData, switchLabel, title } from './constants'
import Info from './containers/InfoboxContainer'
import Input from './containers/InputContainer'
import Radio from './containers/RadioContainer'
import Switch from './containers/SwitchContainer'
import Tooltip from './ui/Tooltip'

const TitleContainer: FC = () => (
  <Box>
    <Title>{title}</Title>
  </Box>
)

const RadioGroupContainer: FC = () => {
  const radios = radioData.types.map((item) => {
    const tooltip = item.tooltip ? <Tooltip text={item.tooltip} /> : null

    return (
      <Radio
        name={radioData.name}
        key={item.id}
        text={item.text}
        value={item.value}
        tooltip={tooltip}
      />
    )
  })

  return <Box>{radios}</Box>
}

const SwitchContainer: FC = () => {
  const { before, after } = switchLabel
  return (
    <SwitchBox>
      <Switch label={{ before, after }} />
    </SwitchBox>
  )
}

const InputContainer: FC = () => (
  <InputBox>
    <Input placeholder={inputPlaceholder} />
  </InputBox>
)

const InfoboxContainer: FC = () => (
  <Box>
    <Info />
  </Box>
)

const SalaryForm: FC = () => {
  return (
    <Container>
      <TitleContainer />
      <RadioGroupContainer />
      <SwitchContainer />
      <InputContainer />
      <InfoboxContainer />
    </Container>
  )
}

export default SalaryForm

const Container = styled.section`
  padding: 50px;
`

const Title = styled.h2`
  color: ${(props): string => props.theme.grey};
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: fit-content;
  &:last-child {
    margin: 0;
  }
`

const SwitchBox = styled(Box)`
  margin-bottom: 20px;
`

const InputBox = styled(Box)`
  margin-bottom: 25px;
`
