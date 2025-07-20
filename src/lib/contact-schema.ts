import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  subject: z.enum(['projekt', 'beratung', 'andere'], {
    required_error: 'Bitte wählen Sie ein Thema aus'
  }),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen haben')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const subjectOptions = [
  { value: 'projekt', label: 'Neues Projekt' },
  { value: 'beratung', label: 'Beratung & Unterstützung' },
  { value: 'andere', label: 'Andere Anfrage' }
] as const