import React from 'react'
import { PHONE_SCHEMA, PhoneFormType } from './FormSchemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Logger } from '@renderer/utils/tools'
import { setDataQrCode } from '@renderer/store/qrCodeEditSettingStore'
import Input from '@renderer/components/Forms/Input'
import { PLACEHOLDER_PER_TYPE } from '../helper'

const PhoneForm = (): React.JSX.Element => {
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
    Logger.log('PHONE form values: ', values)
  }

  if (watch('phone')) {
    const PHONE_FORMAT = `tel:${getValues('phone')}`
    setDataQrCode(PHONE_FORMAT)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitFrom)}>
        <Input
          label="Liens du site:"
          placeholder={PLACEHOLDER_PER_TYPE.phone}
          {...register('phone')}
          error={errors.phone?.message?.toString()}
        />
      </form>
    </div>
  )
}

export default PhoneForm
