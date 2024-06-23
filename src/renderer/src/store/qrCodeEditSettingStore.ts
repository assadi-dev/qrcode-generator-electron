import {
  CornerDotType,
  CornerSquareType,
  DotType,
  DrawType,
  ErrorCorrectionLevel,
  Mode,
  Options,
  TypeNumber
} from 'new-awesome-qrcode'
import { create } from 'zustand'
import { createSelectors } from './helper'
import { produce } from 'immer'

export interface CustomOption extends Options {
  width: number
  height: number
  type: DrawType
  margin: number
  data: string
  typeSecurity: string
  dotsOptions: {
    type?: DotType
    color?: string
  }
  cornersSquareOptions: {
    type?: CornerSquareType
    color?: string
  }
  cornersDotOptions?: {
    type?: CornerDotType
    color?: string
  }
  backgroundOptions: {
    enable?: boolean
    color?: string
  }
  imageOptions?: {
    hideBackgroundDots?: boolean
    imageSize?: number
    crossOrigin?: string
    margin?: number
  }

  backgroundImageOptions?: {
    enable?: boolean
    opacity?: number
    crossOrigin?: string
  }
  qrOptions: {
    typeNumber?: TypeNumber
    mode?: Mode
    errorCorrectionLevel?: ErrorCorrectionLevel
  }
}
export const qrCodeDefaultConfig: CustomOption = {
  width: 800,
  height: 800,
  type: 'canvas',
  margin: 20,
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
    typeNumber: 0,
    errorCorrectionLevel: 'Q'
  }
}

export const useQrCodeConfigStoreBase = create<CustomOption>(() => ({
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
