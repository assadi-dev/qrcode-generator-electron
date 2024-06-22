import { Options } from 'new-awesome-qrcode'
import { create } from 'zustand'
import { createSelectors } from './helper'

export const qrCodeDefaultConfig: Options = {
  width: 800,
  height: 800,
  type: 'canvas',
  margin: 0,
  data: '',
  dotsOptions: {
    color: '#6A1A4C',
    type: 'rounded'
  },
  cornersSquareOptions: {
    type: 'square',
    color: '#111'
  },
  backgroundOptions: {
    color: 'rgba(255,255,255,1)'
  },
  imageOptions: {
    hideBackgroundDots: true,
    crossOrigin: 'anonymous',
    margin: 0,
    imageSize: 0.2
  },
  qrOptions: {
    typeNumber: 4,
    errorCorrectionLevel: 'Q'
  }
}

export const useQrCodeConfigStoreBase = create<Options>(() => ({
  ...qrCodeDefaultConfig
}))

export const useQrCodeConfigStore = createSelectors(useQrCodeConfigStoreBase)
