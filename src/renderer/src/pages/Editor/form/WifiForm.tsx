import Input from '@renderer/components/Forms/Input'
import React, { ChangeEvent } from 'react'
import { AUTHENTICATION_OPTIONS, PLACEHOLDER_FOR_WIFI } from '../helper'
import { useAppStore } from '@renderer/store/store'
import { useForm } from 'react-hook-form'
import { register } from 'module'
import { setDataQrCode, setMainConfigQrCode } from '@renderer/store/qrCodeEditSettingStore'
import Select from '@renderer/components/Forms/Select'
import InputPassword from '@renderer/components/Forms/InputPassword'

const WifiForm = () => {
  const {
    register,
    getValues,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: { ssid: '', password: '', authenticationType: 'WPA' }
  })

  React.useEffect(() => {
    const ssid = getValues('ssid')
    const password = getValues('password')
    const authenticationType = getValues('authenticationType')
    const WIFI_DATA = `WIFI:T:${authenticationType};S:${ssid};P:${password};;`
    setMainConfigQrCode({ data: WIFI_DATA })
  }, [watch('ssid'), watch('password')])

  return (
    <div>
      <form>
        <Input
          label="SSID:"
          placeholder={PLACEHOLDER_FOR_WIFI.ssid}
          {...register('ssid')}
          error={errors.ssid?.message}
        />

        <InputPassword
          label="Mot de passe:"
          type="password"
          placeholder={PLACEHOLDER_FOR_WIFI.password}
          {...register('password')}
          error={errors.password?.message}
        />
        <Select
          label={`Type d'authentification `}
          {...register('authenticationType')}
          options={AUTHENTICATION_OPTIONS}
        />
      </form>
    </div>
  )
}

export default WifiForm
