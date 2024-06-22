import { ComponentProps } from 'react'
import Email from '../icons/Email'
import Link from '../icons/Link'
import Phone from '../icons/Phone'
import SMS from '../icons/SMS'
import User from '../icons/User'
import Wifi from '../icons/Wifi'

type ListButtonElementsType = {
  iconElement: React.FC<ComponentProps<'svg'>>
  label: string
  value: string
}
export const ListButtonElements: ListButtonElementsType[] = [
  {
    iconElement: Link,
    label: 'URL',
    value: 'url'
  },
  {
    iconElement: Email,
    label: 'Email',
    value: 'email'
  },
  {
    iconElement: Phone,
    label: 'Téléphone',
    value: 'phone'
  },
  {
    iconElement: SMS,
    label: 'SMS',
    value: 'sms'
  },
  {
    iconElement: User,
    label: 'Contact',
    value: 'contact'
  },
  {
    iconElement: Wifi,
    label: 'WIFI',
    value: 'wifi'
  }
]
