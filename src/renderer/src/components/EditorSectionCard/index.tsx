import React from 'react'

const EditorSectionCard = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    console.log(value)
  }

  return (
    <div className="w-1/2 bg-slate-100 rounded shadow-lg">
      <div className="p-3">
        <div>
          <p className="text-center font-bold">Personnalisation</p>
        </div>
        <div className="my-6">
          <input
            type="text"
            placeholder="Entrer votre text"
            className="w-full p-2"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default EditorSectionCard
