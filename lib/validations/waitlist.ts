import { z } from 'zod'
import { isValidPhoneNumber } from 'libphonenumber-js'

export const waitlistSchema = z.object({
  business_name: z.string().min(2, "Business name is required"),
  contact_name: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address").refine(
    (email) => {
      const domain = email.split('@')[1]?.toLowerCase() || ''
      const disposableDomains = [
        'tempmail.com', 'guerrillamail.com', '10minutemail.com', 
        'throwaway.email', 'mailinator.com', 'trashmail.com'
      ]
      return !disposableDomains.includes(domain)
    },
    "Please use a valid business email"
  ),
  contact_phone: z.string().refine(
    (val) => isValidPhoneNumber(val),
    "Invalid contact phone number"
  ),
  business_phone: z.string().refine(
    (val) => isValidPhoneNumber(val),
    "Invalid business phone number"
  ),
  business_type: z.string().min(1, "Please select business type"),
  telecom_operator: z.string().min(1, "Please select telecom operator"),
  custom_operator: z.string().optional(),
  website: z.string()
    .refine(
      (val) => {
        if (val === '') return true;
        const domainRegex = /^(https?:\/\/)?([\w-]+\.)+(com|co|ai|io|net|org|es|uk|de|fr|it|pt|nl|be)$/i;
        return domainRegex.test(val);
      },
      "Please enter a valid website (e.g., example.com or https://example.com)"
    ),
  message: z.string().optional(),
  country: z.string().optional(),
  language: z.string().optional(),
  user_agent: z.string().optional(),
  referrer: z.string().optional(),
})