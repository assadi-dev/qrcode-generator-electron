import { ContactFormType } from './form/FormSchemas'
import VCardJS from 'vcards-js'

export const PLACEHOLDER_PER_TYPE = {
  url: 'Entrez votre url',
  email: 'Entrez une adresse email',
  phone: 'Entrez un numéro de téléphone',
  sms: 'Entrez un numéro de téléphone'
}

export const PLACEHOLDER_FOR_WIFI = {
  ssid: `Entrez le nom d’accès du wifi`,
  password: 'Entrez le mot de passe du wifi'
}

export const PLACEHOLDER_FOR_CONTACT = {
  lastname: `Entrez votre Nom`,
  firstname: 'Entrez votre Prénom',
  phone: 'Entrez un numéro de téléphone',
  email: 'Entrez une adresse email',
  organization: 'Entrez le nom de votre société',
  url: 'Entrez le lien de votre site'
}

export const AUTHENTICATION_OPTIONS = [
  { label: 'WPA', value: 'WPA' },
  { label: 'WEP', value: 'WEP' }
]

/**
 * Formattage au format vCard
 * ```bash
 * BEGIN:VCARD
  VERSION:3.0
  N:Owen;Sean;;;
  FN:Sean Owen
  TITLE:Software Engineer
  EMAIL;TYPE=INTERNET;TYPE=WORK;TYPE=PREF:srowen@google.com
  URL;TYPE=Homepage:https://example.com
  END:VCARD
```
 * 
 * @param {ContactFormType} userData 
 * 
 */
export const formattedToVCard = (userData: ContactFormType): string => {
  const { lastname, firstname, phone, email, organization, url } = userData
  //create a new vCard
  const vCard = new VCardJS()
  vCard.lastName = lastname
  vCard.firstName = firstname
  vCard.organization = organization
  vCard.cellPhone = phone
  vCard.url = url
  vCard.email = email
  const formattedData = vCard.getFormattedString()

  return formattedData.trim()
}
