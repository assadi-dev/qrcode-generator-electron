import { Logger } from '@renderer/utils/tools'
import QRCodeStyling from 'new-awesome-qrcode'
import React from 'react'
import { getDataUrlAsync } from './helper'
import { useQrCodeConfigStore } from '@renderer/store/qrCodeEditSettingStore'

const PreviewQrCodeCard = () => {
  const prevQrcodeRef = React.useRef<HTMLImageElement | null>(null)
  const extension = 'jpeg'
  const quality = 0.75

  const qrCodeValue = `http://google.com`
  const qrCodeSettingGenerator = useQrCodeConfigStore()

  React.useEffect(() => {
    const qrCode = new QRCodeStyling({
      ...qrCodeSettingGenerator,
      data: qrCodeValue
    })
    const SetDataUrl = async (): Promise<void> => {
      if (!prevQrcodeRef.current) return
      const dataBase64 = await qrCode.toDataUrl(extension, quality)
      prevQrcodeRef.current.src = dataBase64
      prevQrcodeRef.current.alt = `QRCODE-Picture for connect to WIFI`
      Logger.log(dataBase64)
    }

    SetDataUrl()
  }, [])
  return (
    <div className="w-1/3 bg-slate-100 rounded shadow-lg  p-3 text-center flex flex-col items-center">
      <div>
        <p className="text-center font-bold"> Aperçu QR Code</p>
      </div>

      <img
        id="preview-qrqode"
        ref={prevQrcodeRef}
        className="my-8  w-[280px] h-[250px] bg-white border-slate-300 border-2 rounded"
      />
    </div>
  )
}

export default PreviewQrCodeCard
