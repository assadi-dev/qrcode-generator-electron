import React from 'react'
import WifiForm from '@renderer/pages/Editor/form/WifiForm'

const EditorSectionCard = (): React.JSX.Element => {
  /*   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserValue(e.target.value)
  } */

  return (
    <div className="w-1/2 bg-slate-100 rounded shadow-lg">
      <div className="p-3">
        <div>
          <p className="text-center font-bold">Personnalisation</p>
        </div>
        <div className="my-6">
          <WifiForm />
        </div>
      </div>
    </div>
  )
}

export default EditorSectionCard
