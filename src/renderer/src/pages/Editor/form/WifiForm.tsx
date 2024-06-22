import Input from '@renderer/components/Forms/Input'
import React from 'react'
import { PLACEHOLDER_FOR_WIFI } from '../helper'
import { useAppStore } from '@renderer/store/store'

const WifiForm = () => {
  return (
    <div>
      <form>
        <Input label="SSID:" placeholder={PLACEHOLDER_FOR_WIFI.ssid} />
        <Input label="Mot de passe:" type="password" placeholder={PLACEHOLDER_FOR_WIFI.password} />
      </form>
    </div>
  )
}

export default WifiForm
