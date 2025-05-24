'use client'

const AppMain = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return <AppMain>{children}</AppMain>
}
