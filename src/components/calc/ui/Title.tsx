import React, { FC } from 'react'
import styled from 'styled-components/macro'

import { title } from '../constants'
import { TitleBox } from '../containers/Box'

const TitleComponent: FC = () => (
  <TitleBox>
    <Title>{title}</Title>
  </TitleBox>
)

export default TitleComponent

const Title = styled.h2`
  color: ${(props): string => props.theme.grey};
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`
