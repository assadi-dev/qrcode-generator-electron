import { Logger } from '@renderer/utils/tools'
import QRCodeStyling, { Options } from 'new-awesome-qrcode'
import React from 'react'
import { getDataUrlAsync } from './helper'
import { CustomOption, useQrCodeConfigStore } from '@renderer/store/qrCodeEditSettingStore'

const PreviewQrCodeCard = () => {
  const prevQrcodeRef = React.useRef<HTMLImageElement | null>(null)
  const extension = 'jpeg'
  const quality = 0.75
  const dt = new Date()

  const qrCodeSettingGeneratorData = useQrCodeConfigStore.use.data()
  const qrCodeSettingGeneratorTypeSecurity = useQrCodeConfigStore.use.typeSecurity()
  const qrCodeSettingGenerator = useQrCodeConfigStore.use.data()
  const qrCodeSettingGeneratorDotOptions = useQrCodeConfigStore.use.dotsOptions()
  const qrCodeSettingGeneratorBackgroundOptions = useQrCodeConfigStore.use.backgroundOptions()
  const qrCodeSettingGeneratorCornersSquareOptions = useQrCodeConfigStore.use.cornersSquareOptions()
  const qrCodeSettingGeneratorMargin = useQrCodeConfigStore.use.margin()
  const qrCodeSettingGeneratorQrOption = useQrCodeConfigStore.use.qrOptions()

  const qrCodeData = React.useMemo(() => {
    if (!qrCodeSettingGenerator) return null
    const qrCode = new QRCodeStyling<Options & CustomOption>({
      width: 800,
      height: 800,
      type: 'canvas',
      margin: qrCodeSettingGeneratorMargin,
      data: qrCodeSettingGeneratorData,
      typeSecurity: qrCodeSettingGeneratorTypeSecurity,
      dotsOptions: qrCodeSettingGeneratorDotOptions,
      cornersSquareOptions: qrCodeSettingGeneratorCornersSquareOptions,
      backgroundOptions: qrCodeSettingGeneratorBackgroundOptions,
      qrOptions: qrCodeSettingGeneratorQrOption
    })
    const SetDataUrl = async (): Promise<void> => {
      if (!prevQrcodeRef.current) return
      const dataBase64 = await qrCode.toDataUrl(extension, quality)
      prevQrcodeRef.current.src = dataBase64
      prevQrcodeRef.current.alt = `QRCODE-Picture for connect to WIFI`
    }

    SetDataUrl()
    return qrCode
  }, [qrCodeSettingGenerator])

  const handleClickDownload = () => {
    if (qrCodeData) {
      qrCodeData.download({ extension: extension, name: `qrcode-${dt.getTime()}` })
    }
  }

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
      <div>
        <button type="button" onClick={handleClickDownload}>
          Télécharger
        </button>
      </div>
    </div>
  )
}

export default PreviewQrCodeCard
