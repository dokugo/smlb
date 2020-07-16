export enum SalaryType {
  Net = 'net',
  Tax = 'tax',
  Cost = 'cost',
}

export enum PaymentMode {
  Monthly = 'monthly',
  Daily = 'daily',
  Hourly = 'hourly',
  Minimal = 'minimal',
}

export interface InputPlaceholder {
  field: string
  label: {
    [PaymentMode.Monthly]: string
    [PaymentMode.Daily]: string
    [PaymentMode.Hourly]: string
    [PaymentMode.Minimal]: string
  }
}

export interface InfoboxData {
  id: number
  type: SalaryType
  text: string
}

export interface Calculated {
  [SalaryType.Net]: string
  [SalaryType.Tax]: string
  [SalaryType.Cost]: string
}

export type SalaryInput = '' | number
