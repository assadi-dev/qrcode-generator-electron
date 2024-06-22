import { create } from 'zustand'
import { createSelectors } from './helper'

type Wifi = {
  ssid: string
  password: string
}

type Contact = {
  lastName: string
  firstName: string
}

type Store = {
  type: string
  file: File | null
  value: string
  wifi: Wifi | null
  contact: Contact | null
}

export const useAppStoreBase = create<Store>(() => ({
  type: 'url',
  file: null,
  value: '',
  contact: null,
  wifi: null
}))

export const useAppStore = createSelectors(useAppStoreBase)

/**
 * Mise à jour de la valeur type
 * @param {string} type  type de qrCode
 */
export const setType = (type: string): void => {
  useAppStore.setState({ type })
}
/**
 * Mise à jour du champs saisie par l'utilisateurs
 * @param {string} value contenu du text
 */
export const setUserValue = (value: string): void => {
  useAppStore.setState({ value })
}
