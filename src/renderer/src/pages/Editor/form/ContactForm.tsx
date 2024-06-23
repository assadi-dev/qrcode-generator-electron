import React from 'react'
import { formattedToVCard, PLACEHOLDER_FOR_CONTACT } from '../helper'
import { setDataQrCode } from '@renderer/store/qrCodeEditSettingStore'
import { Logger } from '@renderer/utils/tools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CONTACT_SCHEMA, ContactFormType } from './FormSchemas'
import Input from '@renderer/components/Forms/Input'

const ContactForm = (): React.JSX.Element => {
  const {
    handleSubmit,
    register,

    formState: { errors }
  } = useForm<ContactFormType>({
    mode: 'onChange',
    resolver: zodResolver(CONTACT_SCHEMA)
  })

  const submitFrom = (values): void => {
    Logger.log('Contact form values: ', values)
    const VCARD_FORMAT = formattedToVCard(values)
    console.log(VCARD_FORMAT)

    setDataQrCode(VCARD_FORMAT)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitFrom)}>
        <div className="flex gap-4">
          <Input
            label="Nom:"
            placeholder={PLACEHOLDER_FOR_CONTACT.lastname}
            {...register('lastname')}
            error={errors.lastname?.message?.toString()}
          />
          <Input
            label="Prénom:"
            placeholder={PLACEHOLDER_FOR_CONTACT.firstname}
            {...register('firstname')}
            error={errors.firstname?.message?.toString()}
          />
        </div>
        <div className="flex gap-4">
          <Input
            label="Email:"
            type="email"
            placeholder={PLACEHOLDER_FOR_CONTACT.email}
            {...register('email')}
            error={errors.email?.message?.toString()}
          />
          <Input
            label="Téléphone:"
            placeholder={PLACEHOLDER_FOR_CONTACT.phone}
            {...register('phone')}
            error={errors.phone?.message?.toString()}
          />
        </div>
        <Input
          label="Société:"
          placeholder={PLACEHOLDER_FOR_CONTACT.organization}
          {...register('organization')}
          error={errors.organization?.message?.toString()}
        />
        <Input
          label="Lien de votre site:"
          placeholder={PLACEHOLDER_FOR_CONTACT.url}
          {...register('url')}
          error={errors.url?.message?.toString()}
        />
        <button
          type="submit"
          className="py-2 px-3 bg-slate-800 hover:bg-slate-900 text-white text-sm"
        >
          Générer
        </button>
      </form>
    </div>
  )
}

export default ContactForm
