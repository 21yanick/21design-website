'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle, X, AlertCircle, Loader2 } from 'lucide-react'

type ToastType = 'success' | 'error' | 'loading'

interface Toast {
  id: string
  type: ToastType
  title: string
  description?: string
}


// Simple toast store
class ToastStore {
  private toasts: Toast[] = []
  private listeners: ((toasts: Toast[]) => void)[] = []

  subscribe(listener: (toasts: Toast[]) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  addToast(toast: Omit<Toast, 'id'>) {
    const newToast: Toast = {
      ...toast,
      id: Math.random().toString(36).substr(2, 9)
    }
    this.toasts = [...this.toasts, newToast]
    this.notifyListeners()

    // Auto dismiss after 5 seconds (except loading)
    if (toast.type !== 'loading') {
      setTimeout(() => {
        this.removeToast(newToast.id)
      }, 5000)
    }

    return newToast.id
  }

  removeToast(id: string) {
    this.toasts = this.toasts.filter(t => t.id !== id)
    this.notifyListeners()
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener([...this.toasts]))
  }
}

const toastStore = new ToastStore()

// Hook to use toasts
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    return toastStore.subscribe(setToasts)
  }, [])

  const showToast = (toast: Omit<Toast, 'id'>) => {
    return toastStore.addToast(toast)
  }

  const dismissToast = (id: string) => {
    toastStore.removeToast(id)
  }

  return { toasts, showToast, dismissToast }
}

// Toast component
export function Toaster() {
  const { toasts, dismissToast } = useToast()

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-background/95 backdrop-blur-sm border border-theme rounded-lg p-4 shadow-lg glow min-w-[300px]"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {toast.type === 'success' && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                {toast.type === 'error' && (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                )}
                {toast.type === 'loading' && (
                  <Loader2 className="w-5 h-5 text-accent animate-spin" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-primary">
                  {toast.title}
                </div>
                {toast.description && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {toast.description}
                  </div>
                )}
              </div>
              
              {toast.type !== 'loading' && (
                <button
                  onClick={() => dismissToast(toast.id)}
                  className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Utility functions for common toast types
export const toast = {
  success: (title: string, description?: string) => {
    toastStore.addToast({ type: 'success', title, description })
  },
  error: (title: string, description?: string) => {
    toastStore.addToast({ type: 'error', title, description })
  },
  loading: (title: string, description?: string) => {
    return toastStore.addToast({ type: 'loading', title, description })
  },
  dismiss: (id: string) => {
    toastStore.removeToast(id)
  }
}