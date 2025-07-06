import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  company: z.string().optional(),
  service: z.enum(['nextjs', 'flutter', 'wordpress', 'other'], {
    required_error: 'Bitte wählen Sie einen Service aus'
  }),
  budget: z.enum(['5k-10k', '10k-25k', '25k-50k', '50k+'], {
    required_error: 'Bitte wählen Sie ein Budget aus'
  }),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen den Datenschutzbestimmungen zustimmen'
  })
})

export type ContactFormData = z.infer<typeof contactFormSchema>