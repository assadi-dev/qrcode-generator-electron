import QRCodeStyling, { Options } from 'new-awesome-qrcode'
import React from 'react'
import { CustomOption, useQrCodeConfigStore } from '@renderer/store/qrCodeEditSettingStore'
import ArrowDownload from '../icons/ArrowDownload'

const PreviewQrCodeCard = (): React.JSX.Element => {
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
    if (!qrCodeSettingGenerator && !prevQrcodeRef.current) return null
    const qrCode = new QRCodeStyling<Options & CustomOption>({
      width: 900,
      height: 900,
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
      if (!prevQrcodeRef.current || !qrCodeSettingGeneratorData) return
      const dataBase64 = await qrCode.toDataUrl(extension, quality)
      prevQrcodeRef.current.src = dataBase64
      prevQrcodeRef.current.alt = `QRCODE-Picture for connect to WIFI`
    }

    SetDataUrl()
    return qrCode
  }, [
    qrCodeSettingGeneratorMargin,
    qrCodeSettingGeneratorData,
    qrCodeSettingGeneratorTypeSecurity,
    qrCodeSettingGeneratorDotOptions,
    qrCodeSettingGeneratorCornersSquareOptions,
    qrCodeSettingGeneratorBackgroundOptions,
    qrCodeSettingGeneratorQrOption
  ])

  const handleClickDownload = (): void => {
    if (qrCodeData) {
      qrCodeData?.download({ extension: extension, name: `qrcode-${dt.getTime()}` })
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

      <button
        type="button"
        className="flex justify-center items-center w-full my-3 px-3 py-2 bg-[#1b1b1f]  text-white rounded"
        onClick={handleClickDownload}
      >
        <ArrowDownload className="size-5 mr-1" />
        Télécharger
      </button>
    </div>
  )
}

export default PreviewQrCodeCard
