import { clsx, type ClassValue } from 'clsx'
import { UseFormSetError } from 'react-hook-form'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleErrorApi = ({ error, setError }: { error: any; setError?: UseFormSetError<any> }) => {
  if (error?.status === 422 && error?.payload.formErrors && setError) {
    error.payload.formErrors.forEach((item: { field: string; message: string }) => {
      setError(item.field, {
        type: 'server',
        message: item.message
      })
    })
  } else {
    toast.error(error?.message ?? 'Lỗi không xác định')
  }
}

const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

export const getSavedAccessToken = (): string | null => getCookie('accessToken')
export const getSavedRefreshToken = (): string | null => getCookie('refreshToken')
export const getIsLoggedIn = (): string | null => getCookie('isLoggedIn')

export const geSavedUserData = () => {
  if (typeof window === 'undefined') return undefined
  const user = localStorage.getItem('userData')
  return user ? JSON.parse(user) : undefined
}

export const clearUserData = () => {
  if (typeof window === 'undefined') return
  localStorage.removeItem('userData')
}
