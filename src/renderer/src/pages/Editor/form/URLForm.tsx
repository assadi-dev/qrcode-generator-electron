import Input from '@renderer/components/Forms/Input'
import React from 'react'
import { PLACEHOLDER_PER_TYPE } from '../helper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { URL_SCHEMA } from './FormSchemas'
import { Logger } from '@renderer/utils/tools'
import { setDataQrCode } from '@renderer/store/qrCodeEditSettingStore'

const URLForm = (): React.JSX.Element => {
  const {
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: { url: '' },
    resolver: zodResolver(URL_SCHEMA)
  })

  const submitFrom = (values): void => {
    Logger.log('url form values: ', values)
  }

  if (watch('url')) {
    setDataQrCode(getValues('url'))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitFrom)}>
        <Input
          label="Liens du site:"
          placeholder={PLACEHOLDER_PER_TYPE.url}
          {...register('url')}
          error={errors.url?.message}
        />
      </form>
    </div>
  )
}

export default URLForm
