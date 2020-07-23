import { DefaultTheme } from 'styled-components'

export const TRANSITION_TIME_NUMERIC = 200

const theme: DefaultTheme = {
  colors: {
    black: 'rgb(70, 70, 70)',
    body: 'rgba(170, 170, 170, 0.01)',
    darkblue: 'rgb(95, 110, 170)',
    grey: 'rgb(170, 170, 170)',
    lightgrey: 'rgb(230, 230, 230)',
    lightyellow: 'rgb(250, 245, 220)',
    orange: 'rgb(250, 160, 55)',
    shadow: 'rgba(0, 0, 0, 0.175)',
    white: 'rgb(250, 250, 250)',
  },
  animation: {
    fast: `${TRANSITION_TIME_NUMERIC}ms`,
    mild: `300ms`,
    func: 'ease-in-out',
  },
}

export default theme
