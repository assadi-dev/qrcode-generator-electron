import React from 'react'
import { RenderFormView } from '@renderer/pages/Editor/ListViews'
import { useAppStore } from '@renderer/store/store'

const EditorSectionCard = (): React.JSX.Element => {
  const viewType = useAppStore.use.type()
  const ViewRenderSelected = RenderFormView[viewType].element

  return (
    <div className="w-1/2 bg-slate-100 rounded shadow-lg">
      <div className="p-3">
        <div>
          <p className="text-center font-bold">Personnalisation</p>
        </div>
        <div className="my-6">
          <ViewRenderSelected />
        </div>
      </div>
    </div>
  )
}

export default EditorSectionCard
