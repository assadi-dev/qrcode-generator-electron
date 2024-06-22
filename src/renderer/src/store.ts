import { create, StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  let store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}

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
