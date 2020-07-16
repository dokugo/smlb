import {
  InfoboxData,
  InputPlaceholder,
  PaymentMode,
  SalaryType,
} from 'store/salary/types'

export const title = 'Сумма'

export const radioData = {
  name: 'salaryType',
  types: [
    {
      text: 'Оклад за месяц',
      value: PaymentMode.Monthly,
      id: 0,
    },
    {
      text: 'МРОТ',
      value: PaymentMode.Minimal,
      id: 1,
      tooltip:
        'МРОТ — минимальный размер оплаты труда. Разный для разных регионов.',
    },
    {
      text: 'Оплата за день',
      value: PaymentMode.Daily,
      id: 2,
    },
    {
      text: 'Оплата за час',
      value: PaymentMode.Hourly,
      id: 3,
    },
  ],
}

export const switchLabel = { before: 'Указать с НДФЛ', after: 'Без НДФЛ' }

export const inputPlaceholder: InputPlaceholder = {
  field: 'Введите з/п',
  label: {
    monthly: '₽',
    daily: '₽ в день',
    hourly: '₽ в час',
    minimal: '',
  },
}

export const infoboxData: Array<InfoboxData> = [
  {
    text: 'сотрудник будет получать на руки',
    type: SalaryType.Net,
    id: 0,
  },
  {
    text: 'НДФЛ, 13% от оклада',
    type: SalaryType.Tax,
    id: 1,
  },
  {
    text: 'за сотрудника в месяц',
    type: SalaryType.Cost,
    id: 2,
  },
]
