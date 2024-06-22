import React from 'react'
import { setUserValue, useAppStore } from '@renderer/store'
import { PLACEHOLDER_PER_TYPE } from '@renderer/pages/Editor/helper'

const EditorSectionCard = (): React.JSX.Element => {
  const type = useAppStore.use.type()
  const value = useAppStore.use.value()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserValue(e.target.value)
  }

  return (
    <div className="w-1/2 bg-slate-100 rounded shadow-lg">
      <div className="p-3">
        <div>
          <p className="text-center font-bold">Personnalisation</p>
          <p>Type: {type}</p>
        </div>
        <div className="my-6">
          <input
            type="text"
            placeholder={PLACEHOLDER_PER_TYPE[type]}
            className="w-full p-2"
            onChange={handleChange}
            defaultValue={value}
          />
        </div>
      </div>
    </div>
  )
}

export default EditorSectionCard
