'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Loader2, MessageCircle } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { contactFormSchema, subjectOptions, type ContactFormData } from '@/lib/contact-schema'
import { sendContactEmail, loadEmailJS } from '@/lib/email-service'
import { toast } from 'sonner'

interface ContactModalProps {
  children: React.ReactNode
}

export function ContactModal({ children }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: undefined,
      message: '',
    },
  })

  // Load EmailJS when component mounts
  useEffect(() => {
    loadEmailJS()
  }, [])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Show loading toast
    const loadingToast = toast.loading('Nachricht wird gesendet...', {
      description: 'Bitte warten Sie einen Moment'
    })
    
    try {
      const result = await sendContactEmail(data)
      
      // Dismiss loading toast
      toast.dismiss(loadingToast)
      
      if (result.success) {
        // Success toast
        toast.success('Nachricht erfolgreich gesendet!', {
          description: 'Ich melde mich innerhalb von 24 Stunden bei Ihnen'
        })
        
        // Reset form and close modal
        form.reset()
        setIsOpen(false)
      } else {
        // Error toast
        toast.error('Fehler beim Senden', {
          description: result.error || 'Bitte versuchen Sie es später erneut'
        })
      }
    } catch (error) {
      // Dismiss loading toast
      toast.dismiss(loadingToast)
      
      // Error toast
      toast.error('Unerwarteter Fehler', {
        description: 'Bitte kontaktieren Sie mich direkt: hello@21design.ch'
      })
      
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-sm border-theme glow">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-theme flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-accent" />
            </div>
            <DialogTitle className="text-primary text-xl">
              Projekt besprechen
            </DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground">
            Erzählen Sie mir von Ihrem Projekt. Ich melde mich innerhalb von 24 Stunden bei Ihnen.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ihr Name"
                      className="border-theme"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">E-Mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="ihre.email@beispiel.ch"
                      className="border-theme"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Subject Field */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">Thema</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-theme">
                        <SelectValue placeholder="Worum geht es?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {subjectOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">Nachricht</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                      className="min-h-24 border-theme"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex-1 glow-strong group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Nachricht senden
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="btn-tertiary"
              >
                Abbrechen
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}