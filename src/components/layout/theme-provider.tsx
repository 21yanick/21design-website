'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useState, useEffect } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // Wait for hydration to complete (Next.js 15 fix)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={true} // Important for SSR stability
      storageKey="theme" // Use default key for consistency
    >
      {/* Only render children after mount to prevent hydration mismatch */}
      <div suppressHydrationWarning>
        {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
      </div>
    </NextThemesProvider>
  )
}