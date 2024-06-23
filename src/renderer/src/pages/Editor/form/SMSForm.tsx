import React from 'react'
import { useForm } from 'react-hook-form'
import { PHONE_SCHEMA, PhoneFormType } from './FormSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Logger } from '@renderer/utils/tools'
import { PLACEHOLDER_PER_TYPE } from '../helper'
import Input from '@renderer/components/Forms/Input'
import { setDataQrCode } from '@renderer/store/qrCodeEditSettingStore'

const SMSForm = (): React.JSX.Element => {
  const {
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors }
  } = useForm<PhoneFormType>({
    mode: 'onChange',
    resolver: zodResolver(PHONE_SCHEMA)
  })

  const submitFrom = (values): void => {
    Logger.log('SMS form values: ', values)
  }

  if (watch('phone')) {
    const SMS_FORMAT = `smsto:${getValues('phone')}`
    setDataQrCode(SMS_FORMAT)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitFrom)}>
        <Input
          label="Liens du site:"
          placeholder={PLACEHOLDER_PER_TYPE.sms}
          {...register('phone')}
          error={errors.phone?.message?.toString()}
        />
      </form>
    </div>
  )
}

export default SMSForm
