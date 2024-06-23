import { zodResolver } from '@hookform/resolvers/zod'
import Input from '@renderer/components/Forms/Input'
import { setDataQrCode } from '@renderer/store/qrCodeEditSettingStore'
import { Logger } from '@renderer/utils/tools'
import React from 'react'
import { useForm } from 'react-hook-form'
import { PLACEHOLDER_PER_TYPE } from '../helper'
import { EMAIL_SCHEMA } from './FormSchemas'

const EmailForm = (): React.JSX.Element => {
  const {
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: { email: '' },
    resolver: zodResolver(EMAIL_SCHEMA)
  })

  const submitFrom = (values): void => {
    Logger.log('Email form values: ', values)
  }

  if (watch('email')) {
    setDataQrCode(getValues('email'))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitFrom)}>
        <Input
          label="Liens du site:"
          placeholder={PLACEHOLDER_PER_TYPE.email}
          {...register('email')}
          error={errors.email?.message}
        />
      </form>
    </div>
  )
}

export default EmailForm
