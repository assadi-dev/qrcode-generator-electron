import { z } from 'zod'
import validator from 'validator'

export const URL_SCHEMA = z.object({
  url: z.string().url({ message: 'Format URL incorrect' })
})
export type URLFormType = z.infer<typeof URL_SCHEMA>

export const EMAIL_SCHEMA = z.object({
  email: z.string().email({ message: 'Format email incorrect' })
})
export type EmailFormType = z.infer<typeof EMAIL_SCHEMA>

export const PHONE_SCHEMA = z.object({
  phone: z.string().refine(validator.isMobilePhone, 'Numéro de téléphone incorrect')
})
export type PhoneFormType = z.infer<typeof PHONE_SCHEMA>

export const CONTACT_SCHEMA = z.object({
  lastname: z.string().min(1, { message: 'Le nom est obligatoire' }),
  firstname: z.string().min(1, { message: 'Le prénom est obligatoire' }),
  phone: z.string().refine(validator.isMobilePhone, 'Numéro de téléphone incorrect'),
  email: z.string().email({ message: 'Format email incorrect' }),
  url: z.string().url({ message: 'Format URL incorrect' }),
  organization: z.string()
})
export type ContactFormType = z.infer<typeof CONTACT_SCHEMA>
