import type { ContactFormData } from './contact-schema'

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_21design',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contact',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'
}

interface EmailResult {
  success: boolean
  error?: string
}

/**
 * Send email using EmailJS
 * Falls back to mailto if EmailJS fails or is not configured
 */
export async function sendContactEmail(data: ContactFormData): Promise<EmailResult> {
  try {
    // Check if EmailJS is available
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).emailjs) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const emailjs = (window as any).emailjs
      
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: getSubjectLabel(data.subject),
        message: data.message,
        to_email: 'hello@21design.ch'
      }

      // Send email via EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )

      if (result.status === 200) {
        return { success: true }
      } else {
        throw new Error('EmailJS returned non-200 status')
      }
    } else {
      // EmailJS not loaded, fall back to mailto
      return fallbackToMailto(data)
    }
  } catch (error) {
    console.error('EmailJS error:', error)
    // Fall back to mailto on any error
    return fallbackToMailto(data)
  }
}

/**
 * Fallback to mailto when EmailJS fails
 */
function fallbackToMailto(data: ContactFormData): EmailResult {
  try {
    const subject = `${getSubjectLabel(data.subject)} - ${data.name}`
    const body = `Name: ${data.name}\nE-Mail: ${data.email}\n\nNachricht:\n${data.message}`
    const mailtoUrl = `mailto:hello@21design.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoUrl
    
    return { 
      success: true, 
      error: 'Fallback zu E-Mail-Client verwendet' 
    }
  } catch {
    return { 
      success: false, 
      error: 'Email-Versendung fehlgeschlagen' 
    }
  }
}

/**
 * Get human readable subject label
 */
function getSubjectLabel(subject: string): string {
  const labels = {
    'projekt': 'Neues Projekt',
    'beratung': 'Beratung & Unterstützung',
    'andere': 'Andere Anfrage'
  }
  return labels[subject as keyof typeof labels] || 'Kontakt'
}

/**
 * Load EmailJS script dynamically
 */
export function loadEmailJS(): Promise<boolean> {
  return new Promise((resolve) => {
    // Check if already loaded
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).emailjs) {
      resolve(true)
      return
    }

    // Create script element
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    
    script.onload = () => {
      // Initialize EmailJS
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).emailjs) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).emailjs.init(EMAILJS_CONFIG.publicKey)
        resolve(true)
      } else {
        resolve(false)
      }
    }
    
    script.onerror = () => {
      resolve(false)
    }
    
    document.head.appendChild(script)
  })
}