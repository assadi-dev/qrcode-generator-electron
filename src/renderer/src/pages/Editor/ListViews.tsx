import ContactForm from './form/ContactForm'
import EmailForm from './form/EmailForm'
import GeoLocationForm from './form/GeoLocationForm'
import PhoneForm from './form/PhoneForm'
import SMSForm from './form/SMSForm'
import URLForm from './form/URLForm'
import WifiForm from './form/WifiForm'

export const WIFI_FORM_VIEW = 'wifi'
export const EMAIL_FORM_VIEW = 'email'
export const PHONE_FORM_VIEW = 'phone'
export const SMS_FORM_VIEW = 'sms'
export const CONTACT_FORM_VIEW = 'contact'
export const GEO_FORM_VIEW = 'geoLocation'
export const URL_FORM_VIEW = 'url'

export const RenderFormView = {
  [WIFI_FORM_VIEW]: {
    name: 'wifi',
    element: WifiForm
  },
  [EMAIL_FORM_VIEW]: {
    name: 'email',
    element: EmailForm
  },
  [PHONE_FORM_VIEW]: {
    name: 'phone',
    element: PhoneForm
  },
  [SMS_FORM_VIEW]: {
    name: 'sms',
    element: SMSForm
  },
  [CONTACT_FORM_VIEW]: {
    nam: 'contact',
    element: ContactForm
  },
  [GEO_FORM_VIEW]: {
    nam: 'geoLocation',
    element: GeoLocationForm
  },
  [URL_FORM_VIEW]: {
    nam: 'url',
    element: URLForm
  }
}
