import QRCodeStyling from 'new-awesome-qrcode'

export const getDataUrlAsync = async (qrCodeInstance: QRCodeStyling): Promise<string> => {
  const data = await qrCodeInstance.toDataUrl()
  return data
}
