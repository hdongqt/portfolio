export const TokenType = {
  ForgotPasswordToken: 'ForgotPasswordToken',
  AccessToken: 'AccessToken',
  RefreshToken: 'RefreshToken',
  TableToken: 'TableToken'
} as const

export const Role = {
  Admin: 'Admin',
  Guest: 'Guest'
} as const

export const RoleValues = [Role.Admin, Role.Guest] as const

export const ManagerRoom = 'manager' as const
