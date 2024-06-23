import { Options } from 'new-awesome-qrcode'
import { create } from 'zustand'
import { createSelectors } from './helper'
import { produce } from 'immer'

export type CustomOption = {
  typeSecurity: string
}
export const qrCodeDefaultConfig: CustomOption & Options = {
  width: 800,
  height: 800,
  type: 'canvas',
  margin: 25,
  data: '',
  typeSecurity: 'WPA',
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

export const useQrCodeConfigStoreBase = create<Options & CustomOption>(() => ({
  ...qrCodeDefaultConfig
}))

export const useQrCodeConfigStore = createSelectors(useQrCodeConfigStoreBase)

/**
 * Met à jour la valeur du qrCode
 * @param value valeur du QR Code
 */
export const setDataQrCode = (value: string): void => {
  useQrCodeConfigStore.setState(
    produce((state) => {
      state.data = value
    })
  )
}

type MainConfigQrCode = {
  width?: number
  height?: number
  type?: 'canvas' | 'svg'
  margin?: number
  data?: string
}

/**
 * Met à jour les config principale du qrCode
 * @param values valeur du QR Code
 */
export const setMainConfigQrCode = (values: MainConfigQrCode): void => {
  useQrCodeConfigStore.setState((state) => ({ ...state, ...values }))
}